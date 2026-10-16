import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const EditorialHeadline: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <h1 
      className="text-[34px] sm:text-[44px] md:text-[54px] lg:text-[56px] leading-[1.14] font-medium tracking-[-0.03em] select-none [text-wrap:balance]"
      style={{ 
        fontFamily: language === 'ja' ? "'Zen Kaku Gothic New', sans-serif" : "'Inter', 'Inter Placeholder', sans-serif",
        color: '#363C30',
      }}
    >
      {language === 'en' ? (
        <>
          {t.headline.prefix}{' '}
          <span 
            className="font-serif-italic italic font-normal tracking-normal pr-1 text-[1.06em] editorial-italic-highlight cursor-default"
            style={{ 
              fontFamily: '"The Portray Italic", "Instrument Serif", "Playfair Display", Georgia, serif',
              color: '#363C30', 
            }}
          >
            {t.headline.intention}
          </span>
          , move with{' '}
          <span 
            className="font-serif-italic italic font-normal tracking-normal pr-1 text-[1.06em] editorial-italic-highlight cursor-default"
            style={{ 
              fontFamily: '"The Portray Italic", "Instrument Serif", "Playfair Display", Georgia, serif',
              color: '#363C30', 
            }}
          >
            {t.headline.speed}
          </span>
          , &amp;{' '}
          <span 
            className="font-serif-italic italic font-normal tracking-normal pr-1 text-[1.06em] editorial-italic-highlight cursor-default"
            style={{ 
              fontFamily: '"The Portray Italic", "Instrument Serif", "Playfair Display", Georgia, serif',
              color: '#363C30', 
            }}
          >
            {t.headline.obsess}
          </span>{' '}
          {t.headline.suffix}
        </>
      ) : (
        <>
          {t.headline.prefix}
          <span 
            className="font-serif-italic italic font-normal tracking-normal px-1 text-[1.06em] editorial-italic-highlight cursor-default"
            style={{ 
              fontFamily: '"The Portray Italic", "Instrument Serif", "Playfair Display", Georgia, serif',
              color: '#363C30', 
            }}
          >
            {t.headline.intention}
          </span>
          し、
          <span 
            className="font-serif-italic italic font-normal tracking-normal px-1 text-[1.06em] editorial-italic-highlight cursor-default"
            style={{ 
              fontFamily: '"The Portray Italic", "Instrument Serif", "Playfair Display", Georgia, serif',
              color: '#363C30', 
            }}
          >
            {t.headline.speed}
          </span>
          に行動し、
          <span 
            className="font-serif-italic italic font-normal tracking-normal px-1 text-[1.06em] editorial-italic-highlight cursor-default"
            style={{ 
              fontFamily: '"The Portray Italic", "Instrument Serif", "Playfair Display", Georgia, serif',
              color: '#363C30', 
            }}
          >
            {t.headline.obsess}
          </span>
          {t.headline.suffix}
        </>
      )}
    </h1>
  );
};
