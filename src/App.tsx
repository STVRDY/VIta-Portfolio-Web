import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import HomePage from './pages/HomePage';
import Layout from './components/layout/Layout';
import Preloader from './components/ui/Preloader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Calculamos el tiempo total del preloader
    // (Número de mensajes + 1 para el cursor) * delay por mensaje
    const loadingTime = (7 + 1) * 400; 

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, loadingTime);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <Preloader key="preloader" />
      ) : (
        <Layout key="layout">
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Layout>
      )}
    </AnimatePresence>
  );
}

export default App;