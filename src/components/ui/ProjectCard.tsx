import { memo } from 'react';
import { motion } from 'framer-motion';
import type { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
}

function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.05, y: -8, boxShadow: "0px 0px 15px rgba(57, 255, 20, 0.5)" }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onClick(project)}
      className="cursor-pointer group relative overflow-hidden border border-crt-green hover:bg-crt-green hover:text-crt-black transition-colors duration-200 h-full p-4 flex flex-col justify-end"
    >
      <img
        src={project.thumbnail}
        alt={`Miniatura del proyecto ${project.title}`} // <-- Usa 'title'
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-20 group-hover:opacity-10"
        loading="lazy"
      />
      <div className="relative z-10">
        <div>
          <p className="text-crt-amber font-bold text-sm">&gt; FILE: {project.slug || `project-0${project.id}`}.dat</p>
          <h3 className="font-bold text-lg mt-2 truncate group-hover:text-crt-black">{project.title}</h3> {/* <-- Usa 'title' */}
        </div>
        <div>
          <p className="text-sm text-crt-blue mt-1">TYPE: [{project.category.toUpperCase()}]</p>
          <p className="text-xs mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
             // press ENTER to open
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default memo(ProjectCard);