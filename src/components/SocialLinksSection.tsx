import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import noteIconBlack from '../assets/note-icon-black.png';
import linkedinIcon from '../assets/linkedin-icon.png';

export const SocialLinksSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section 
      id="contact" 
      className="py-12 sm:py-16 border-t-2 border-dashed"
      style={{ borderColor: '#E3DAAE' }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[170px_1fr] gap-6 lg:gap-10 items-start">
        {/* Left Badge */}
        <div>
          <span 
            className="inline-block px-3.5 py-1.5 rounded-[4px] font-['Inter'] font-semibold text-[13px] leading-[17px] tracking-normal shadow-xs whitespace-nowrap"
            style={{ backgroundColor: '#E3DAAE', color: '#363C30' }}
          >
            {t.social.badge}
          </span>
        </div>

        {/* Right Cards Container (Bento frame matching #E3DAAE) */}
        <div className="w-full">
          <div 
            className="rounded-[8px] p-[5px] w-full"
            style={{ backgroundColor: '#E3DAAE' }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[5px]">
              
              {/* Card 1: Note.com */}
              <a
                href="https://note.com/zende"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-[5px] p-4 sm:p-5 flex items-center justify-between group transition-all duration-200 hover:shadow-[0_2px_10px_rgba(54,60,48,0.08)]"
              >
                {/* Note.com Icon Squircle (Black squircle with white 'n') */}
                <div className="w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-[14px] flex items-center justify-center overflow-hidden flex-shrink-0 shadow-xs bg-black">
                  <img 
                    src={noteIconBlack} 
                    alt="note.com logo" 
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Text Content Right */}
                <div className="flex flex-col items-end justify-between h-16 sm:h-[72px]">
                  <span 
                    className="font-['Inter'] font-medium text-[13px] sm:text-[14px] leading-tight"
                    style={{ color: '#5C6454' }}
                  >
                    {t.social.mediumLabel}
                  </span>
                  <div className="inline-flex items-center gap-1.5 font-['Inter'] font-medium text-[15px] sm:text-[16px] text-[#363C30] group-hover:text-[#59866F] transition-colors duration-200">
                    <span>Note</span>
                    <span className="relative w-5 h-5 inline-flex items-center justify-center">
                      <ArrowUpRight className="w-[18px] h-[18px] absolute transition-all duration-200 group-hover:opacity-0 group-hover:scale-75 stroke-[2.2] text-[#5C6454]" />
                      <ArrowRight className="w-[18px] h-[18px] absolute opacity-0 scale-75 transition-all duration-200 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-0.5 stroke-[2.2] text-[#59866F]" />
                    </span>
                  </div>
                </div>
              </a>

              {/* Card 2: LinkedIn */}
              <a
                href="https://www.linkedin.com/in/tejashree-zende/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-[5px] p-4 sm:p-5 flex items-center justify-between group transition-all duration-200 hover:shadow-[0_2px_10px_rgba(54,60,48,0.08)]"
              >
                {/* LinkedIn Icon Squircle */}
                <div className="w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-[14px] flex items-center justify-center overflow-hidden flex-shrink-0 shadow-xs">
                  <img 
                    src={linkedinIcon} 
                    alt="LinkedIn logo" 
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Text Content Right */}
                <div className="flex flex-col items-end justify-between h-16 sm:h-[72px]">
                  <span 
                    className="font-['Inter'] font-medium text-[13px] sm:text-[14px] leading-tight"
                    style={{ color: '#5C6454' }}
                  >
                    {t.social.linkedInLabel}
                  </span>
                  <div className="inline-flex items-center gap-1.5 font-['Inter'] font-medium text-[15px] sm:text-[16px] text-[#363C30] group-hover:text-[#6E7FB7] transition-colors duration-200">
                    <span>LinkedIn</span>
                    <span className="relative w-5 h-5 inline-flex items-center justify-center">
                      <ArrowUpRight className="w-[18px] h-[18px] absolute transition-all duration-200 group-hover:opacity-0 group-hover:scale-75 stroke-[2.2] text-[#5C6454]" />
                      <ArrowRight className="w-[18px] h-[18px] absolute opacity-0 scale-75 transition-all duration-200 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-0.5 stroke-[2.2] text-[#6E7FB7]" />
                    </span>
                  </div>
                </div>
              </a>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
