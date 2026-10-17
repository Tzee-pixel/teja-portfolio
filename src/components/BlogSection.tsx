import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const BlogSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section 
      id="blog" 
      className="mt-16 sm:mt-20 py-12 sm:py-16 border-t-2 border-dashed"
      style={{ borderColor: '#E3DAAE' }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[170px_1fr] gap-6 lg:gap-10 items-start">
        {/* Left Badge */}
        <div>
          <span 
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full font-['Inter'] font-semibold text-[11px] uppercase tracking-[0.2em] shadow-2xs whitespace-nowrap transition-transform duration-300 hover:scale-105 select-none"
            style={{ backgroundColor: '#E3DAAE', color: '#363C30', border: '1px solid rgba(54,60,48,0.06)' }}
          >
            {t.blog.badge}
          </span>
        </div>

        {/* Right Announcement Text */}
        <div className="w-full">
          <p 
            className="font-['Inter'] font-medium text-[26px] sm:text-[30px] leading-[34px] sm:leading-[38px] tracking-tight [text-wrap:balance]"
            style={{ color: '#363C30' }}
          >
            {t.blog.text}
          </p>
        </div>
      </div>
    </section>
  );
};
