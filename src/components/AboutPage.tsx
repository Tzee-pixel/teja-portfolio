import React, { useEffect } from 'react';
import { Sidebar } from './Sidebar';
import { Footer } from './Footer';
import { useLanguage } from '../context/LanguageContext';
import { aboutContent } from '../locales/about';
import aboutPhoto from '../assets/about-me.jpg';
import { Reveal } from './Reveal';

export const AboutPage: React.FC = () => {
  const { language } = useLanguage();
  const content = aboutContent[language];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF8EC] text-[#363C30] font-sans antialiased selection:bg-[#E3DAAE] selection:text-[#363C30] flex flex-col">
      <div className="relative w-full flex-1 flex flex-col lg:flex-row">
        <Sidebar isInnerPage={true} />
        <main className="px-6 sm:px-10 pt-4 sm:pt-6 pb-16 lg:border-l-2 lg:border-dashed lg:border-[#E3DAAE] lg:ml-6 lg:pl-10 xl:ml-10 xl:pl-16 lg:pt-[54px] lg:pb-16 lg:pr-[60px] w-full flex-1 min-w-0">
          <div>
            {/* Page Title */}
            <Reveal delayMs={50}>
              <h1 
                className="text-[34px] sm:text-[44px] md:text-[52px] leading-[1.14] font-medium tracking-[-0.03em] select-none mb-8 sm:mb-12 [text-wrap:balance]"
                style={{ 
                  fontFamily: language === 'ja' ? "'Zen Kaku Gothic New', sans-serif" : "'Inter', 'Inter Placeholder', sans-serif",
                  color: '#363C30', 
                }}
              >
                {content.headingPrefix}{' '}
                <span 
                  className="font-serif-italic italic font-normal tracking-normal pr-1 text-[1.06em]"
                  style={{ 
                    fontFamily: language === 'ja' 
                      ? '"Shippori Mincho", "The Portray Italic", "Instrument Serif", Georgia, serif'
                      : '"The Portray Italic", "Instrument Serif", "Playfair Display", Georgia, serif',
                    color: '#363C30', 
                  }}
                >
                  {content.headingHighlight}
                </span>
              </h1>
            </Reveal>

            {/* Layout Grid: Photo Column + Story Text Column */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-start">
              
              {/* Photo Column (Sticky on Desktop) */}
              <div className="lg:col-span-5 lg:sticky lg:top-14">
                <Reveal delayMs={120}>
                  <div className="p-2 sm:p-2.5 rounded-[22px] sm:rounded-[26px] bg-[#FAF8EC] border-2 border-dashed border-[#E3DAAE] shadow-[0_4px_24px_rgba(54,60,48,0.04)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(54,60,48,0.08)]">
                    <div className="overflow-hidden rounded-[16px] sm:rounded-[20px] aspect-[3/4] bg-[#EFE9D2]">
                      <img 
                        src={aboutPhoto} 
                        alt="Tejashree Zende" 
                        className="w-full h-full object-cover object-center select-none transition-transform duration-700 hover:scale-[1.02]"
                      />
                    </div>
                  </div>

                  {/* Status indicator badge */}
                  <div className="mt-3.5 px-2 flex items-center justify-between text-[#5C6454]">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="font-['Inter'] text-[13px]">
                        {language === 'ja' ? '東京（日本）' : 'Tokyo, Japan'}
                      </span>
                    </div>
                    <span className="font-['Inter'] text-[12px] font-medium text-[#5C6454]/80 px-2 py-0.5 rounded-[4px] bg-[#E3DAAE]/40">
                      JLPT N2
                    </span>
                  </div>
                </Reveal>
              </div>

              {/* Text Column: Only the provided paragraphs, beautifully formatted */}
              <Reveal 
                delayMs={180}
                className="lg:col-span-7 space-y-6 max-w-[680px]"
              >
                <div
                  style={{
                    fontFamily: language === 'ja' ? "'Zen Kaku Gothic New', sans-serif" : "'Inter', sans-serif",
                  }}
                  className="space-y-6"
                >
                  {/* Paragraph 1: Lead Intro */}
                  <p className="text-[18px] sm:text-[20px] leading-[30px] sm:leading-[34px] font-medium text-[#363C30] [text-wrap:pretty]">
                    {content.lead}
                  </p>

                  {/* Paragraph 2: Journey */}
                  <p className="text-[15px] sm:text-[16px] leading-[26px] sm:leading-[28px] text-[#5C6454] [text-wrap:pretty]">
                    {content.p2}
                  </p>

                  {/* Paragraph 3: Experience at MGT & CloudPanel */}
                  <p className="text-[15px] sm:text-[16px] leading-[26px] sm:leading-[28px] text-[#5C6454] [text-wrap:pretty]">
                    {content.p3}
                  </p>

                  {/* Paragraph 4: Japan & AI */}
                  <p className="text-[15px] sm:text-[16px] leading-[26px] sm:leading-[28px] text-[#5C6454] [text-wrap:pretty]">
                    {content.p4}
                  </p>

                  {/* Paragraph 5: Outside of design / JLPT */}
                  <p className="text-[15px] sm:text-[16px] leading-[26px] sm:leading-[28px] text-[#5C6454] [text-wrap:pretty]">
                    {content.p5}
                  </p>

                  {/* Paragraph 6: Philosophy & curiosity */}
                  <p className="text-[15px] sm:text-[16px] leading-[26px] sm:leading-[28px] text-[#5C6454] [text-wrap:pretty]">
                    {content.p6}
                  </p>
                </div>
              </Reveal>

            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};
