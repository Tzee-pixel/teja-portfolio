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
            className="inline-block px-3.5 py-1.5 rounded-[4px] font-['Inter'] font-semibold text-[13px] leading-[17px] tracking-normal shadow-xs whitespace-nowrap transition-transform duration-300 hover:scale-105 select-none"
            style={{ backgroundColor: '#E3DAAE', color: '#363C30' }}
          >
            {t.blog.badge}
          </span>
        </div>

        {/* Right Announcement Text */}
        <div className="w-full">
          <p 
            className="font-['Inter'] font-medium text-[26px] sm:text-[30px] leading-[34px] sm:leading-[38px] tracking-tight"
            style={{ color: '#363C30' }}
          >
            {t.blog.text}
          </p>
        </div>
      </div>
    </section>
  );
};
