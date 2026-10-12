import React, { useState, useEffect, useCallback } from 'react';
import { Sidebar } from './Sidebar';
import { Footer } from './Footer';
import { useLanguage } from '../context/LanguageContext';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

// Eagerly import all gallery images sorted numerically from 01 to 35
const imageModules = import.meta.glob<{ default: string }>('../gallery/*.avif', { eager: true });
const galleryImages: string[] = Object.entries(imageModules)
  .sort(([pathA], [pathB]) => pathA.localeCompare(pathB, undefined, { numeric: true }))
  .map(([, mod]) => mod.default);

export const GalleryPage: React.FC = () => {
  const { language } = useLanguage();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
    document.body.style.overflow = '';
  };

  const showPrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! > 0 ? prev! - 1 : galleryImages.length - 1));
  }, [selectedIndex]);

  const showNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! < galleryImages.length - 1 ? prev! + 1 : 0));
  }, [selectedIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, showPrev, showNext]);

  return (
    <div className="min-h-screen bg-[#FAF8EC] text-[#363C30] font-sans antialiased selection:bg-[#E3DAAE] selection:text-[#363C30] flex flex-col">
      <div className="relative w-full flex-1 flex flex-col lg:flex-row">
        <Sidebar isInnerPage={true} />
        <main className="px-6 sm:px-10 pt-4 sm:pt-6 pb-16 lg:border-l-2 lg:border-dashed lg:border-[#E3DAAE] lg:ml-6 lg:pl-10 xl:ml-10 xl:pl-16 lg:pt-[54px] lg:pb-16 lg:pr-[60px] w-full flex-1 min-w-0">
          <div>
            {/* Header */}
            <div className="mb-8 sm:mb-10">
              <h1 
                className="text-[32px] sm:text-[42px] md:text-[52px] leading-[38px] sm:leading-[48px] md:leading-[58px] font-medium tracking-[-0.02em] select-none mb-3"
                style={{ 
                  fontFamily: language === 'ja' ? "'Zen Kaku Gothic New', sans-serif" : "'Inter', 'Inter Placeholder', sans-serif",
                  color: '#363C30', 
                }}
              >
                {language === 'ja' ? (
                  <>
                    デザイン{' '}
                    <span 
                      className="font-serif-italic italic font-normal tracking-normal pr-1 text-[1.06em]"
                      style={{ 
                        fontFamily: '"Shippori Mincho", "The Portray Italic", "Instrument Serif", Georgia, serif',
                        color: '#363C30', 
                      }}
                    >
                      アーカイブ
                    </span>
                  </>
                ) : (
                  <>
                    Design{' '}
                    <span 
                      className="font-serif-italic italic font-normal tracking-normal pr-1 text-[1.06em]"
                      style={{ 
                        fontFamily: '"The Portray Italic", "Instrument Serif", "Playfair Display", Georgia, serif',
                        color: '#363C30', 
                      }}
                    >
                      archive
                    </span>
                  </>
                )}
              </h1>
              <p 
                className="font-['Inter'] text-[15px] sm:text-[16px] leading-[24px] text-[#5C6454]"
                style={{
                  fontFamily: language === 'ja' ? "'Zen Kaku Gothic New', sans-serif" : "'Inter', sans-serif",
                }}
              >
                {language === 'ja'
                  ? 'ケーススタディ以外のUI探求、コンセプトワーク、ビジュアル実験のコレクション。'
                  : 'A collection of UI explorations, concept designs, and visual experiments created outside of the main case studies.'}
              </p>
            </div>

            {/* Responsive Gallery: 1 column on mobile (< sm), 2 columns on sm+ */}
            
            {/* Mobile View (< sm): Single column displaying 1 image at a time in strict 1-35 order */}
            <div className="flex sm:hidden flex-col gap-4 max-w-[1150px]">
              {galleryImages.map((src, index) => (
                <div 
                  key={index}
                  onClick={() => openLightbox(index)}
                  className="group relative rounded-[18px] overflow-hidden bg-[#FAF8EC] border-2 border-dashed border-[#E3DAAE] shadow-[0_2px_14px_rgba(54,60,48,0.04)] cursor-pointer transition-all duration-300 active:scale-[0.99]"
                >
                  <div className="overflow-hidden rounded-[14px] m-1.5 bg-[#EFE9D2]">
                    <img 
                      src={src} 
                      alt={`Gallery image ${index + 1}`}
                      loading="lazy"
                      className="w-full h-auto object-cover select-none"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Tablet & Desktop View (>= sm): 2-Column Responsive Staggered Grid */}
            <div className="hidden sm:grid sm:grid-cols-2 gap-5 lg:gap-7 items-start max-w-[1150px]">
              {/* Left Column (Images 1, 3, 5, 7, 9, 11, ...) */}
              <div className="flex flex-col gap-5 lg:gap-7">
                {galleryImages
                  .map((src, index) => ({ src, index }))
                  .filter((_, i) => i % 2 === 0)
                  .map(({ src, index }) => (
                    <div 
                      key={index}
                      onClick={() => openLightbox(index)}
                      className="group relative rounded-[20px] lg:rounded-[24px] overflow-hidden bg-[#FAF8EC] border-2 border-dashed border-[#E3DAAE] shadow-[0_2px_14px_rgba(54,60,48,0.04)] cursor-pointer transition-all duration-300 hover:shadow-[0_10px_28px_rgba(54,60,48,0.12)] hover:-translate-y-1"
                    >
                      <div className="overflow-hidden rounded-[15px] lg:rounded-[18px] m-1.5 lg:m-2 bg-[#EFE9D2]">
                        <img 
                          src={src} 
                          alt={`Gallery image ${index + 1}`}
                          loading="lazy"
                          className="w-full h-auto object-cover select-none transition-transform duration-500 ease-out group-hover:scale-[1.025]"
                        />
                      </div>
                      {/* Subtle hover overlay */}
                      <div className="absolute inset-0 bg-[#363C30]/0 group-hover:bg-[#363C30]/5 transition-colors duration-300 pointer-events-none rounded-[20px] lg:rounded-[24px]" />
                    </div>
                  ))}
              </div>

              {/* Right Column (Images 2, 4, 6, 8, 10, 12, ...) */}
              <div className="flex flex-col gap-5 lg:gap-7">
                {galleryImages
                  .map((src, index) => ({ src, index }))
                  .filter((_, i) => i % 2 === 1)
                  .map(({ src, index }) => (
                    <div 
                      key={index}
                      onClick={() => openLightbox(index)}
                      className="group relative rounded-[20px] lg:rounded-[24px] overflow-hidden bg-[#FAF8EC] border-2 border-dashed border-[#E3DAAE] shadow-[0_2px_14px_rgba(54,60,48,0.04)] cursor-pointer transition-all duration-300 hover:shadow-[0_10px_28px_rgba(54,60,48,0.12)] hover:-translate-y-1"
                    >
                      <div className="overflow-hidden rounded-[15px] lg:rounded-[18px] m-1.5 lg:m-2 bg-[#EFE9D2]">
                        <img 
                          src={src} 
                          alt={`Gallery image ${index + 1}`}
                          loading="lazy"
                          className="w-full h-auto object-cover select-none transition-transform duration-500 ease-out group-hover:scale-[1.025]"
                        />
                      </div>
                      {/* Subtle hover overlay */}
                      <div className="absolute inset-0 bg-[#363C30]/0 group-hover:bg-[#363C30]/5 transition-colors duration-300 pointer-events-none rounded-[20px] lg:rounded-[24px]" />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div 
          className="fixed inset-0 z-50 bg-[#1D211A]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-4 sm:top-6 right-4 sm:right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer z-10 focus:outline-none"
            aria-label="Close lightbox"
          >
            <X className="w-5 h-5 stroke-[2.2]" />
          </button>

          {/* Previous Arrow */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-all cursor-pointer z-10 focus:outline-none"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
          </button>

          {/* Active Image Container */}
          <div 
            className="relative max-w-[92vw] max-h-[85vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={galleryImages[selectedIndex]} 
              alt={`Gallery image ${selectedIndex + 1}`}
              className="max-w-full max-h-[80vh] object-contain rounded-[16px] sm:rounded-[20px] shadow-2xl select-none"
            />
            {/* Counter indicator */}
            <div className="mt-3.5 px-3.5 py-1 rounded-full bg-black/40 text-white/90 text-[13px] font-['Inter'] font-medium tracking-wider backdrop-blur-sm">
              {selectedIndex + 1} / {galleryImages.length}
            </div>
          </div>

          {/* Next Arrow */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-all cursor-pointer z-10 focus:outline-none"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6 stroke-[2.5]" />
          </button>
        </div>
      )}
    </div>
  );
};
