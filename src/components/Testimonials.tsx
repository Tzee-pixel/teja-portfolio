import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import sayanAvatar from '../assets/sayan-chakraborty.png';
import sumaAvatar from '../assets/suma-chandrashekar.png';
import satishAvatar from '../assets/satish-lokhande.png';

export const Testimonials: React.FC = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      id: '1',
      name: 'Sayan Chakraborty',
      role: t.testimonials.card1Role,
      avatar: sayanAvatar,
      quote: t.testimonials.card1Quote,
      positionClass: 'self-start ml-0 sm:ml-4',
    },
    {
      id: '2',
      name: 'Suma Chandrashekar',
      role: t.testimonials.card2Role,
      avatar: sumaAvatar,
      quote: t.testimonials.card2Quote,
      positionClass: 'self-center sm:ml-[30%] my-12 sm:my-20',
    },
    {
      id: '3',
      name: 'Satish Lokhande',
      role: t.testimonials.card3Role,
      avatar: satishAvatar,
      quote: t.testimonials.card3Quote,
      positionClass: 'self-end mr-0 sm:mr-4',
    },
  ];

  return (
    <section id="testimonials" className="relative pt-20 pb-20 min-h-[1200px]">
      {/* Sticky Header Centered in Viewport */}
      <div className="sticky top-28 z-0 text-center pointer-events-none">
        {/* Microscopic Pill Category Tag */}
        <div className="inline-block mb-6 sm:mb-8 pointer-events-auto">
          <span 
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full font-['Inter'] font-semibold text-[11px] uppercase tracking-[0.2em] shadow-2xs transition-transform duration-300 hover:scale-105 select-none"
            style={{ backgroundColor: '#E3DAAE', color: '#363C30', border: '1px solid rgba(54,60,48,0.06)' }}
          >
            {t.testimonials.tag}
          </span>
        </div>

        {/* Heading */}
        <h2 
          className="font-['Inter'] font-medium text-4xl sm:text-5xl lg:text-[54px] leading-[1.1] tracking-tight mt-1 [text-wrap:balance]"
          style={{ color: '#363C30' }}
        >
          {t.testimonials.headingPrefix}{' '}
          <span 
            className="font-serif-italic italic font-normal text-[1.15em] tracking-normal editorial-italic-highlight cursor-default"
            style={{ 
              fontFamily: '"The Portray Italic", "Instrument Serif", "Playfair Display", Georgia, serif',
              color: '#363C30' 
            }}
          >
            {t.testimonials.headingHighlight}
          </span>
        </h2>

        {/* Subtitle */}
        <p 
          className="mt-3.5 font-['Inter'] font-normal text-[15px] sm:text-[16px] leading-[23px] max-w-[460px] mx-auto text-center [text-wrap:pretty]"
          style={{ color: '#5C6454' }}
        >
          {t.testimonials.subtitle}
        </p>
      </div>

      {/* Floating Staggered Testimonial Cards that scroll over the sticky header */}
      <div className="relative z-10 flex flex-col pt-8 w-full">
        {testimonials.map((item, index) => {
          const alignmentClasses = [
            'self-start ml-0 mb-32 sm:mb-36',
            'self-center mx-auto mb-32 sm:mb-36',
            'self-end mr-0',
          ][index];

          return (
            <div 
              key={item.id}
              className={`group w-full max-w-[400px] cursor-default ${alignmentClasses} rounded-[24px] p-2 bg-[#E3DAAE]/70 border border-[#363C30]/[0.08] shadow-[0_8px_24px_rgba(54,60,48,0.04)] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:shadow-[0_20px_44px_rgba(54,60,48,0.08)] active:scale-[0.985]`}
            >
              {/* Inner Core Container */}
              <div className="rounded-[18px] bg-white/95 p-6 sm:p-7 border border-[#363C30]/[0.04] shadow-[inset_0_1px_2px_rgba(255,255,255,0.95)] flex flex-col h-full">
                {/* Avatar with Double-Bezel frame */}
                <div className="w-12 h-12 rounded-full p-0.5 bg-[#E3DAAE]/40 border border-[#363C30]/[0.08] mb-6 overflow-hidden flex-shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105">
                  <img 
                    src={item.avatar} 
                    alt={item.name} 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>

                <h3 
                  className="font-['Inter'] font-semibold text-[17px] leading-[20px] mb-1 tracking-tight"
                  style={{ color: '#1E2319' }}
                >
                  {item.name}
                </h3>
                <p 
                  className="font-['Inter'] font-normal text-[12.5px] sm:text-[13px] leading-[18px] mb-4"
                  style={{ color: '#5C6454' }}
                >
                  {item.role}
                </p>
                <p 
                  className="font-['Inter'] font-medium text-[15px] sm:text-[15.5px] leading-[24px] whitespace-pre-line [text-wrap:pretty] text-[#363C30]"
                >
                  {item.quote}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
