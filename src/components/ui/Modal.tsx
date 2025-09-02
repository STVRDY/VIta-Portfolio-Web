import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiExternalLink, FiInfo } from 'react-icons/fi';
import type { Project } from '../../types'; // Importamos el tipo centralizado

// === SUB-COMPONENTE PARA LA IMAGEN DE GALERÍA (CORREGIDO) ===
type GalleryItem = Project['gallery'][number];

interface GalleryImageProps {
  image: GalleryItem;
  projectTitle: string;
  index: number;
}

const GalleryImage = ({ image, projectTitle, index }: GalleryImageProps) => {
  const [showMeta, setShowMeta] = useState(false);

  // Manejo flexible: soporta string o {src, metadata}
  const src =
    typeof image === 'string'
      ? image
      : (image as any).src ?? (image as any).url ?? '';

  const metadata =
    typeof image === 'object' && image && 'metadata' in image && (image as any).metadata
      ? (image as any).metadata
      : {};

  return (
    <div className="relative border-2 border-crt-blue p-2 group overflow-hidden">
      <img
        src={src}
        alt={`Imagen ${index + 1} del proyecto ${projectTitle}`}
        className="w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
      />

      {/* Botón 'i' para info */}
      <button 
        onClick={() => setShowMeta(!showMeta)}
        className="absolute top-4 right-4 z-20 bg-crt-black/50 border border-crt-green text-crt-green p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
        aria-label="Mostrar metadatos de la imagen"
      >
        <FiInfo size={20} />
      </button>

      {/* Overlay de Metadatos */}
      <AnimatePresence>
        {showMeta && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowMeta(false)}
            className="absolute inset-0 z-10 bg-crt-black/90 p-4 flex flex-col justify-end text-sm"
          >
            <h4 className="font-bold text-crt-amber mb-2">&gt; METADATA:</h4>
            <ul className="list-none">
              {Object.entries(metadata).map(([key, value]) => (
                <li key={key}>
                  <span className="text-crt-blue">{key}:</span> {String(value)}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};


// === COMPONENTE PRINCIPAL DEL MODAL (CORREGIDO) ===
interface ModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function Modal({ project, onClose }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!project) return;
    document.body.classList.add('modal-open');

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    const focusableElements = modalRef.current?.querySelectorAll('button,[href]') as NodeListOf<HTMLElement>;
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    firstElement?.focus();

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    modalRef.current?.addEventListener('keydown', handleTabKey);

    return () => {
      document.body.classList.remove('modal-open');
      window.removeEventListener('keydown', handleKeyDown);
      modalRef.current?.removeEventListener('keydown', handleTabKey);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-crt-black/80 z-[100] flex items-center justify-center p-4"
      >
        <motion.div
          ref={modalRef}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-crt-black w-full max-w-4xl max-h-[90vh] border-2 border-crt-green"
          role="dialog"
        >
          <div className="flex justify-between items-center p-4 border-b-2 border-crt-green bg-crt-green text-crt-black">
            <h2 className="font-bold text-lg uppercase">[ {project.title} ]</h2>
            <button onClick={onClose} aria-label="Cerrar modal" className="p-1 border border-crt-black hover:bg-crt-black hover:text-crt-green">
              <FiX size={20} />
            </button>
          </div>

          <div className="p-6 md:p-8 overflow-y-auto max-h-[calc(90vh-70px)]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2 space-y-4">
                <p className="text-crt-amber">&gt; LOADING MEDIA_FILES...</p>
                {project.gallery.map((image, index) => (
                  <GalleryImage key={index} image={image} projectTitle={project.title} index={index} />
                ))}
              </div>
              
              <div className="md:col-span-1 space-y-6">
                 <div>
                    <h3 className="font-bold text-crt-amber">&gt; DESCRIPTION:</h3>
                    <p className="mt-2 text-sm leading-relaxed">{project.description}</p>
                 </div>
                 <div>
                    <h3 className="font-bold text-crt-amber">&gt; ROLE:</h3>
                    <p className="mt-2 text-sm">{project.role}</p>
                 </div>
                 <div>
                    <h3 className="font-bold text-crt-amber">&gt; STACK:</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {project.stack.map(tool => (
                        <span key={tool} className="bg-crt-blue text-crt-black text-xs px-2 py-1">{tool}</span>
                        ))}
                    </div>
                 </div>
                 <div>
                    <h3 className="font-bold text-crt-amber">&gt; DATE:</h3>
                    <p className="mt-2 text-sm">{project.date}</p>
                 </div>
                 <div>
                    <h3 className="font-bold text-crt-amber">&gt; NOTA:</h3>
                    <p className="mt-1 text-sm">{project.nota}</p>
                 </div>
                 {project.projectUrl && (
                    <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full mt-4 border border-crt-green py-2 px-4 hover:bg-crt-green hover:text-crt-black transition-colors duration-200">
                        ACCESS_PROJECT_LINK <FiExternalLink className="ml-2" />
                    </a>
                 )}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
