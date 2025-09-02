import { useState } from 'react'; // Eliminamos 'useContext' que no se usa
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiMenu } from "react-icons/fi";
// Eliminamos la importación de ThemeContext que no se usa

const TerminalNavLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <a href={href} className="px-3 py-1 hover:bg-crt-green hover:text-crt-black transition-colors duration-200">
    <span className="text-crt-amber mr-1">&gt;</span>{children}
  </a>
);

// ↓↓↓  AQUÍ ESTÁ LA LÍNEA QUE FALTABA ↓↓↓
export default function Navbar() {
  // Ahora, movemos la lógica DENTRO del componente
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#portfolio", label: "PORTFOLIO" },
    { href: "#about", label: "ABOUT" },
    { href: "#contact", label: "CONTACT" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 p-4">
        <div className="container mx-auto flex items-center justify-between border-2 border-crt-green bg-crt-black/80 backdrop-blur-sm p-4">
          <a href="#" className="font-bold text-lg animate-flicker">JHAEL_BAEZ.EXE</a>

          <div className="hidden md:flex items-center">
            {navLinks.map(link => <TerminalNavLink key={link.href} href={link.href}>{link.label}</TerminalNavLink>)}
          </div>
          
          <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} aria-label="Abrir menú" className="p-2 border border-crt-green">
                  {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
          </div>
        </div>
      </header>
      
      {/* Drawer para móvil */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-crt-black flex flex-col items-center justify-center space-y-8 md:hidden"
          >
            {navLinks.map(link => (
              <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="text-3xl font-bold hover:bg-crt-green hover:text-crt-black p-4">
                {link.label}
              </a>
            ))}
            <button onClick={() => setIsOpen(false)} className="absolute top-8 right-8 p-2 border border-crt-green">
              <FiX size={24} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
