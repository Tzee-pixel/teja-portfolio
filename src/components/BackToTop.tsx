import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 420);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      className={`fixed bottom-20 sm:bottom-24 right-6 sm:right-8 z-40 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#FAF8EC] text-[#363C30] border-2 border-[#E3DAAE] shadow-[0_6px_20px_rgba(54,60,48,0.12)] flex items-center justify-center transition-all duration-300 ease-out cursor-pointer hover:bg-[#363C30] hover:text-[#FAF8EC] hover:scale-110 active:scale-95 group focus:outline-none ${
        visible 
          ? 'opacity-100 translate-y-0 pointer-events-auto' 
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.2] transition-transform duration-200 group-hover:-translate-y-0.5" />
    </button>
  );
};
