import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Project } from '../../types';
import ProjectCard from '../ui/ProjectCard';
import SectionWrapper from './SectionWrapper';

interface PortfolioSectionProps {
  projects: Project[];
  onProjectClick: (project: Project) => void;
}

export default function PortfolioSection({ projects, onProjectClick }: PortfolioSectionProps) {
  const [activeFilter, setActiveFilter] = useState('Todo');
  const categories = ['Todo', ...new Set(projects.map(p => p.category))];
  const filteredProjects = activeFilter === 'Todo' ? projects : projects.filter(p => p.category === activeFilter);

  return (
    <SectionWrapper id="portfolio" title="DIRECTORY: /PROJECTS">
      <div className="flex justify-center flex-wrap gap-2 mb-12">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-4 py-1 border transition-colors duration-200 ${activeFilter === cat ? 'bg-crt-green text-crt-black' : 'border-crt-green'}`}
          >
            {cat}
          </button>
        ))}
      </div>
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} onClick={onProjectClick} />
          ))}
        </AnimatePresence>
      </motion.div>
    </SectionWrapper>
  );
}
