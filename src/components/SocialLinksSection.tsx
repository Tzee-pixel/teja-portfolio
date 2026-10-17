import React from 'react';
import { ArrowUpRight } from 'lucide-react';
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
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full font-['Inter'] font-semibold text-[11px] uppercase tracking-[0.2em] shadow-2xs whitespace-nowrap transition-transform duration-300 hover:scale-105 select-none"
            style={{ backgroundColor: '#E3DAAE', color: '#363C30', border: '1px solid rgba(54,60,48,0.06)' }}
          >
            {t.social.badge}
          </span>
        </div>

        {/* Right Cards Container (Double-Bezel Bento shell matching #E3DAAE) */}
        <div className="w-full">
          <div 
            className="rounded-[22px] p-2 w-full border border-[#363C30]/[0.08] shadow-[0_8px_24px_rgba(54,60,48,0.03)]"
            style={{ backgroundColor: 'rgba(227, 218, 174, 0.75)' }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              
              {/* Card 1: Note.com */}
              <a
                href="https://note.com/zende"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/95 rounded-[16px] p-4 sm:p-5 flex items-center justify-between group border border-[#363C30]/[0.04] shadow-[inset_0_1px_2px_rgba(255,255,255,0.95)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:shadow-[0_12px_28px_rgba(54,60,48,0.08)] active:scale-[0.985]"
              >
                {/* Note.com Icon Squircle (Black squircle with white 'n') */}
                <div className="w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-[16px] flex items-center justify-center overflow-hidden flex-shrink-0 shadow-xs bg-black transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105">
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
                  <div className="inline-flex items-center gap-2 font-['Inter'] font-semibold text-[15px] sm:text-[16px] text-[#363C30] group-hover:text-[#59866F] transition-colors duration-300">
                    <span>Note</span>
                    <div className="w-7 h-7 rounded-full bg-[#FAF8EC] border border-[#363C30]/10 flex items-center justify-center text-[#5C6454] group-hover:text-[#FAF8EC] group-hover:bg-[#59866F] group-hover:border-[#59866F] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110">
                      <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.4] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </div>
              </a>

              {/* Card 2: LinkedIn */}
              <a
                href="https://www.linkedin.com/in/tejashree-zende/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/95 rounded-[16px] p-4 sm:p-5 flex items-center justify-between group border border-[#363C30]/[0.04] shadow-[inset_0_1px_2px_rgba(255,255,255,0.95)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:shadow-[0_12px_28px_rgba(54,60,48,0.08)] active:scale-[0.985]"
              >
                {/* LinkedIn Icon Squircle */}
                <div className="w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-[16px] flex items-center justify-center overflow-hidden flex-shrink-0 shadow-xs transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105">
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
                  <div className="inline-flex items-center gap-2 font-['Inter'] font-semibold text-[15px] sm:text-[16px] text-[#363C30] group-hover:text-[#6E7FB7] transition-colors duration-300">
                    <span>LinkedIn</span>
                    <div className="w-7 h-7 rounded-full bg-[#FAF8EC] border border-[#363C30]/10 flex items-center justify-center text-[#5C6454] group-hover:text-[#FAF8EC] group-hover:bg-[#6E7FB7] group-hover:border-[#6E7FB7] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110">
                      <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.4] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
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
