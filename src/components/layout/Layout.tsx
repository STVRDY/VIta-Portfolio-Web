import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-20"> {/* pt-20 para dejar espacio al navbar fijo */}
        {children}
      </main>
      <Footer />
    </div>
  );
}