import { useState, useCallback, lazy, Suspense } from 'react';
import { AnimatePresence } from 'framer-motion';

import type { Project } from '../types';
import projectsData from '../data/projects.json';

// Importa las secciones que acabamos de crear
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import PortfolioSection from '../components/sections/PortfolioSection';
import ContactSection from '../components/sections/ContactSection';

// Carga perezosa del Modal
const Modal = lazy(() => import('../components/ui/Modal'));

export default function HomePage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const projects: Project[] = projectsData as Project[];

  const handleProjectClick = useCallback((project: Project) => {
    setSelectedProject(project);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedProject(null);
  }, []);

  return (
    <>
      <HeroSection />
      <AboutSection />
      <PortfolioSection projects={projects} onProjectClick={handleProjectClick} />
      <ContactSection />
      
      <AnimatePresence>
        {selectedProject && (
          <Suspense fallback={null}> {/* Fallback puede ser un spinner si quieres */}
            <Modal project={selectedProject} onClose={handleCloseModal} />
          </Suspense>
        )}
      </AnimatePresence>
    </>
  );
}