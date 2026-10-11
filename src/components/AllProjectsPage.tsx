import React, { useEffect } from 'react';
import { Sidebar } from './Sidebar';
import { ProjectGrid } from './ProjectGrid';
import { BlogSection } from './BlogSection';
import { Footer } from './Footer';
import { useLanguage } from '../context/LanguageContext';

interface AllProjectsPageProps {
  onSelectProject: (id: string) => void;
}

export const AllProjectsPage: React.FC<AllProjectsPageProps> = ({ onSelectProject }) => {
  const { language } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF8EC] text-[#363C30] font-sans antialiased selection:bg-[#E3DAAE] selection:text-[#363C30] flex flex-col">
      <div className="relative w-full flex-1 flex flex-col lg:flex-row">
        <Sidebar isInnerPage={true} />
        <main className="px-6 sm:px-10 pt-4 sm:pt-6 pb-12 lg:border-l-2 lg:border-dashed lg:border-[#E3DAAE] lg:ml-6 lg:pl-10 xl:ml-10 xl:pl-16 lg:pt-[54px] lg:pb-12 lg:pr-[60px] w-full flex-1 min-w-0">
          <div>
            <h1 
              className="text-[32px] sm:text-[42px] md:text-[52px] leading-[38px] sm:leading-[48px] md:leading-[58px] font-medium tracking-[-0.02em] select-none mb-10"
              style={{ 
                fontFamily: language === 'ja' ? "'Zen Kaku Gothic New', sans-serif" : "'Inter', 'Inter Placeholder', sans-serif",
                color: '#363C30', 
              }}
            >
              {language === 'ja' ? (
                <>
                  制作{' '}
                  <span 
                    className="font-serif-italic italic font-normal tracking-normal pr-1 text-[1.06em]"
                    style={{ 
                      fontFamily: '"Shippori Mincho", "The Portray Italic", "Instrument Serif", "Playfair Display", Georgia, serif',
                      color: '#363C30', 
                    }}
                  >
                    実績
                  </span>
                </>
              ) : (
                <>
                  My{' '}
                  <span 
                    className="font-serif-italic italic font-normal tracking-normal pr-1 text-[1.06em]"
                    style={{ 
                      fontFamily: '"The Portray Italic", "Instrument Serif", "Playfair Display", Georgia, serif',
                      color: '#363C30', 
                    }}
                  >
                    work
                  </span>
                </>
              )}
            </h1>
            <ProjectGrid onSelectProject={onSelectProject} />
            <BlogSection />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};
