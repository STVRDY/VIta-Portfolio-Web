import { motion } from 'framer-motion';
import React from 'react';

interface SectionWrapperProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export default function SectionWrapper({ id, title, children }: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      className="py-16 lg:py-24 container mx-auto px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <div className="border-2 border-crt-blue p-4 sm:p-8 bg-crt-black/50">
        <h2 className="text-3xl font-bold mb-8 animate-flicker">&gt; {title}</h2>
        {children}
      </div>
    </motion.section>
  );
}