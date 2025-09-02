import { motion } from 'framer-motion';
import { Cursor, useTypewriter } from 'react-simple-typewriter';

export default function HeroSection() {
  const [text] = useTypewriter({
    words: ['Jhael Báez', 'Diseñador Multidisciplinario', 'Creative Technologist_'],
    loop: true,
    delaySpeed: 2500,
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  return (
    <motion.section 
      className="min-h-screen flex items-center justify-center text-center relative overflow-hidden px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}    
    >
      <div className="grid-background"></div>
      <div className="relative z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold" style={{ minHeight: '80px' }}>
          <span>{text}</span>
          <Cursor cursorStyle="█" cursorColor='#39FF14' />
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-crt-blue animate-flicker">
          [ Diseño // Edición de Video // Fotografía // 3D ]
        </p>
        <a href="#portfolio" className="mt-8 inline-block border-2 border-crt-amber text-crt-amber font-bold py-3 px-8 hover:bg-crt-amber hover:text-crt-black transition-colors duration-200">
          &gt; LOAD_PROJECTS
        </a>
      </div>
    </motion.section>
  );
}