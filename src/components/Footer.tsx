import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight, Copy } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  variant?: 'default' | 'burgundy';
}

export const Footer: React.FC<FooterProps> = ({ variant = 'default' }) => {
  const { language, t } = useLanguage();
  const [copied, setCopied] = useState(false);
  const email = "tzee.zende@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const isBurgundy = variant === 'burgundy';
  const primaryColor = isBurgundy ? '#9E1C5D' : '#363C30';
  const borderColor = isBurgundy ? '#FDECEF' : '#E3DAAE';
  const hoverClass = isBurgundy ? 'hover:text-[#9E1C5D]' : 'hover:text-[#363C30]';

  return (
    <footer 
      className="w-full relative z-20 bg-transparent pt-16 pb-24 sm:pt-20 sm:pb-28 px-6 sm:px-10 lg:px-[60px] border-t-2 border-dashed mt-12"
      style={{ borderColor }}
    >
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        
        {/* Left Heading: Created with love / 心を込めたデザイン */}
        <div>
          <h2 
            className="font-['Inter'] font-medium text-4xl sm:text-5xl lg:text-[54px] leading-[1.1] tracking-tight [text-wrap:balance]"
            style={{ color: primaryColor }}
          >
            {t.footer.headingPrefix}{language === 'en' ? ' ' : ''}
            <span 
              className="font-serif-italic italic font-normal text-[1.15em] tracking-normal editorial-italic-highlight cursor-default inline-block"
              style={{ 
                fontFamily: '"The Portray Italic", "Instrument Serif", "Playfair Display", Georgia, serif',
                color: primaryColor 
              }}
            >
              {t.footer.headingHighlight}
            </span>
          </h2>
        </div>

        {/* Right Links & Copy Email */}
        <div className="flex flex-col items-start md:items-end space-y-4">
          <div>
            <a 
              href="https://www.linkedin.com/in/tejashree-zende/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`group inline-flex items-center gap-1.5 font-['Inter'] font-medium text-[16px] leading-[26px] text-[#5C6454] transition-colors duration-200 cursor-pointer ${hoverClass}`}
            >
              <span>{t.footer.linkedIn}</span>
              <span className="relative w-5 h-5 inline-flex items-center justify-center">
                <ArrowUpRight className="w-[18px] h-[18px] absolute transition-all duration-200 group-hover:opacity-0 group-hover:scale-75 stroke-[2.2] text-[#5C6454]" />
                <ArrowRight className={`w-[18px] h-[18px] absolute opacity-0 scale-75 transition-all duration-200 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-0.5 stroke-[2.2]`} style={{ color: primaryColor }} />
              </span>
            </a>
          </div>

          {/* Email Address & Circular Copy Button with Slide-Up Replace Animation */}
          <div 
            onClick={handleCopyEmail}
            className="flex items-center gap-3 cursor-pointer group select-none"
            title="Click to copy email"
          >
            <div className="relative h-[24px] overflow-hidden flex items-center min-w-[190px]">
              {/* Original Email Text */}
              <span 
                className={`font-['Inter'] font-medium text-[16px] leading-[24px] tracking-normal transition-all duration-300 ease-out absolute left-0 md:right-0 md:left-auto ${
                  copied ? '-translate-y-full opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'
                }`}
                style={{ color: primaryColor }}
              >
                {email}
              </span>

              {/* Replacement 'Copied to Clipboard' Text */}
              <span 
                className={`font-['Inter'] font-medium text-[16px] leading-[24px] tracking-normal whitespace-nowrap transition-all duration-300 ease-out absolute left-0 md:right-0 md:left-auto ${
                  copied ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'
                }`}
                style={{ color: primaryColor }}
              >
                {t.footer.copied}
              </span>
            </div>

            <button
              type="button"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white transition-all duration-200 group-hover:scale-105 active:scale-95 flex-shrink-0 shadow-sm focus:outline-none"
              style={{ backgroundColor: primaryColor }}
              aria-label="Copy Email"
            >
              <Copy className="w-4 h-4 stroke-[2]" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
