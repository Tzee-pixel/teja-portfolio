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
        {/* Category Pill Tag */}
        <div className="inline-block mb-8">
          <span 
            className="inline-block px-3.5 py-1.5 rounded-[4px] font-['Inter'] font-semibold text-[13px] leading-[17px] tracking-normal"
            style={{ backgroundColor: '#E3DAAE', color: '#363C30' }}
          >
            {t.testimonials.tag}
          </span>
        </div>

        {/* Heading */}
        <h2 
          className="font-['Inter'] font-medium text-4xl sm:text-5xl lg:text-[54px] leading-[1.1] tracking-tight mt-1"
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
        {/* Card 1: Sayan Chakraborty (Left) */}
        <div 
          className="group w-full max-w-[390px] bg-white rounded-[5px] p-[24px] cursor-default self-start ml-0 mb-36 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_12px_32px_rgba(54,60,48,0.08)]"
          style={{
            border: '5px solid #E3DAAE',
          }}
        >
          <div className="w-10 h-10 rounded-full overflow-hidden mb-[32px] bg-gray-100">
            <img 
              src={testimonials[0].avatar} 
              alt={testimonials[0].name} 
              className="w-full h-full object-cover rounded-full transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <h3 
            className="font-['Inter'] font-medium text-[17px] leading-[20px] mb-1"
            style={{ color: '#363C30' }}
          >
            {testimonials[0].name}
          </h3>
          <p 
            className="font-['Inter'] font-normal text-[12.5px] sm:text-[13px] leading-[18px] mb-3.5"
            style={{ color: '#5C6454' }}
          >
            {testimonials[0].role}
          </p>
          <p 
            className="font-['Inter'] font-medium text-[15px] leading-[22px] whitespace-pre-line"
            style={{ color: '#5C6454' }}
          >
            {testimonials[0].quote}
          </p>
        </div>

        {/* Card 2: Suma Chandrashekar (Center) */}
        <div 
          className="group w-full max-w-[390px] bg-white rounded-[5px] p-[24px] cursor-default self-center mx-auto mb-36 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_12px_32px_rgba(54,60,48,0.08)]"
          style={{
            border: '5px solid #E3DAAE',
          }}
        >
          <div className="w-10 h-10 rounded-full overflow-hidden mb-[32px] bg-gray-100">
            <img 
              src={testimonials[1].avatar} 
              alt={testimonials[1].name} 
              className="w-full h-full object-cover rounded-full transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <h3 
            className="font-['Inter'] font-medium text-[17px] leading-[20px] mb-1"
            style={{ color: '#363C30' }}
          >
            {testimonials[1].name}
          </h3>
          <p 
            className="font-['Inter'] font-normal text-[12.5px] sm:text-[13px] leading-[18px] mb-3.5"
            style={{ color: '#5C6454' }}
          >
            {testimonials[1].role}
          </p>
          <p 
            className="font-['Inter'] font-medium text-[15px] leading-[22px] whitespace-pre-line"
            style={{ color: '#5C6454' }}
          >
            {testimonials[1].quote}
          </p>
        </div>

        {/* Card 3: Satish Lokhande (Right - scroll ends with bottom aligned to subtitle) */}
        <div 
          className="group w-full max-w-[390px] bg-white rounded-[5px] p-[24px] cursor-default self-end mr-0 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_12px_32px_rgba(54,60,48,0.08)]"
          style={{
            border: '5px solid #E3DAAE',
          }}
        >
          <div className="w-10 h-10 rounded-full overflow-hidden mb-[32px] bg-gray-100">
            <img 
              src={testimonials[2].avatar} 
              alt={testimonials[2].name} 
              className="w-full h-full object-cover rounded-full transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <h3 
            className="font-['Inter'] font-medium text-[17px] leading-[20px] mb-1"
            style={{ color: '#363C30' }}
          >
            {testimonials[2].name}
          </h3>
          <p 
            className="font-['Inter'] font-normal text-[12.5px] sm:text-[13px] leading-[18px] mb-3.5"
            style={{ color: '#5C6454' }}
          >
            {testimonials[2].role}
          </p>
          <p 
            className="font-['Inter'] font-medium text-[15px] leading-[22px] whitespace-pre-line"
            style={{ color: '#5C6454' }}
          >
            {testimonials[2].quote}
          </p>
        </div>
      </div>
    </section>
  );
};
