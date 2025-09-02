import { useState, useEffect } from 'react';

const bootMessages = [
  'INICIANDO SISTEMA...',
  'CARGANDO MODULOS DE KERNEL v2.05...',
  'CHEQUEANDO MEMORIA: 16.0 GB OK',
  'MONTANDO ARCHIVOS DEL SISTEMA...',
  'ESTABLECIENDO ENLACE NEURONAL...',
  'DESENCRIPTANDO INFORMACION DEL PORTFOLIO...',
  'ACESSO CONCEDIDO.',
  'BIENVENIDO',
  'WELCOME',
  'BIENVENUE',
  'ברוך הבא',
  'KARIBU',
];

export default function Preloader() {
    const [messageIndex, setMessageIndex] = useState(0);

    useEffect(() => {
        if (messageIndex < bootMessages.length - 1) {
            const timer = setTimeout(() => {
                setMessageIndex(messageIndex + 1);
            }, Math.random() * (400 - 150) + 150); // Tiempo aleatorio para más realismo
            return () => clearTimeout(timer);
        }
    }, [messageIndex]);
    
    return (
        <div className="fixed inset-0 bg-crt-black z-[9999] flex items-center justify-center">
            <div className="text-left font-mono text-crt-green">
                {bootMessages.slice(0, messageIndex + 1).map((msg, index) => (
                    <p key={index} className="whitespace-nowrap overflow-hidden">
                        &gt; {msg}
                    </p>
                ))}
                <span className="animate-ping">█</span>
            </div>
        </div>
    );
}