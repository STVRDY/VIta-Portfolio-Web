import { useContext } from 'react'; 
import { FiSun, FiMoon } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { ThemeContext } from '../../main';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Cambiar a modo ${theme === 'light' ? 'oscuro' : 'claro'}`}
      className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-200"
      style={{minWidth: '44px', minHeight: '44px'}}
    >
      <motion.div
        key={theme}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
      </motion.div>
    </button>
  );
}
