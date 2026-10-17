import React from 'react';
import cloudpanelMockup1 from '../assets/CloudPanel-mockup-1.png';
import cloudpanelMockup2 from '../assets/CloudPanel-mockup-2.png';
import localbiteMockup1 from '../assets/localbite-mockup-1.png';
import localbiteMockup2 from '../assets/localbite-mockup-2.png';
import birlaMockup from '../assets/birla-mockup.png';
import mgtMockup1 from '../assets/mgt-commerce-mockup-1.png';
import mgtMockup2 from '../assets/mgt-commerce-mockup-2.png';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ProjectItem {
  id: string;
  chips: string[];
  mainHeading: string;
  subHeadline: string;
  accentColor: string;
  folderBg: string;
  cardBg: string;
  cardBorder: string;
  tabWidth: number;
  renderMockup: () => React.ReactNode;
}

interface ProjectGridProps {
  onSelectProject?: (projectId: string) => void;
  excludeId?: string;
  limit?: number;
}

export const ProjectGrid: React.FC<ProjectGridProps> = ({ onSelectProject, excludeId, limit }) => {
  const { t, language } = useLanguage();

  const isJa = language === 'ja';

  let projects: ProjectItem[] = [
    // -------------------------------------------------------------
    // -------------------------------------------------------------
    // CARD 1: CloudPanel Website Redesign
    // -------------------------------------------------------------
    {
      id: 'cloudpanel',
      chips: isJa ? ['Webデザイン', 'UI/UX', 'デザインシステム'] : ['Web Design', 'UI/UX', 'Design System'],
      mainHeading: 'CloudPanel',
      subHeadline: t.projects.cloudpanelTitle,
      accentColor: '#242A1E',
      folderBg: '#E3DAAE',
      cardBg: '#CE9199',
      cardBorder: '#B87B84',
      tabWidth: 145,
      renderMockup: () => (
        <div className="relative w-full h-full flex items-center justify-center overflow-visible">
          {/* Background Tilted Screen 2 (Security) - Natural top overflow matches user reference */}
          <div className="absolute left-[39%] sm:left-[41%] -top-[12%] sm:-top-[15%] lg:-top-[17%] w-[54%] sm:w-[56%] h-[132%] sm:h-[138%] rounded-[10px] shadow-[6px_6px_22px_rgba(54,60,48,0.14)] overflow-hidden transform rotate-[6.5deg] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-2.5 group-hover:translate-x-1.5 select-none">
            <img 
              src={cloudpanelMockup2} 
              alt="CloudPanel Secondary Screen" 
              className="w-full h-full object-cover opacity-95"
              style={{ objectPosition: '0% 58%' }}
            />
          </div>

          {/* Foreground Tilted Screen 1 (Free Hosting) - Overflows left and top outside pink box */}
          <div className="absolute -left-[3%] sm:-left-[2%] -top-[16%] sm:-top-[20%] lg:-top-[22%] w-[58%] sm:w-[60%] h-[128%] sm:h-[134%] rounded-[10px] shadow-[10px_6px_26px_rgba(54,60,48,0.18)] overflow-hidden transform -rotate-[9deg] translate-x-1.5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-2.5 group-hover:translate-x-0.5 select-none pointer-events-none z-10">
            <img 
              src={cloudpanelMockup1} 
              alt="CloudPanel Free Hosting Control Panel" 
              className="w-full h-full object-top object-cover"
            />
          </div>
        </div>
      ),
    },

    // -------------------------------------------------------------
    // CARD 2: LocalBite UX Research & Mobile App
    // -------------------------------------------------------------
    {
      id: 'localbite',
      chips: isJa ? ['UXリサーチ', 'モバイルアプリ', 'ブランディング'] : ['UX Research', 'Mobile App', 'Branding'],
      mainHeading: 'LocalBite',
      subHeadline: t.projects.localbiteTitle,
      accentColor: '#242A1E',
      folderBg: '#E3DAAE',
      cardBg: '#CE9199',
      cardBorder: '#B87B84',
      tabWidth: 135,
      renderMockup: () => (
        <div className="relative w-full h-full flex items-center justify-center overflow-visible">
          {/* Main iPhone Device Mockup - Top 25% overflows boldly above pink box */}
          <div className="absolute left-[7%] sm:left-[9%] -top-[16%] sm:-top-[20%] lg:-top-[22%] w-[64%] sm:w-[67%] lg:w-[69%] h-[134%] sm:h-[142%] select-none pointer-events-none transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-2.5">
            <img 
              src={localbiteMockup1} 
              alt="LocalBite Mobile App" 
              className="w-full h-full object-contain object-top drop-shadow-2xl"
            />
          </div>

          {/* Floating Overlapping Product Badge - Overlaps right side of iPhone */}
          <div className="absolute left-[47%] sm:left-[49%] top-[14%] sm:top-[12%] w-[38%] sm:w-[40%] max-w-[146px] select-none pointer-events-none z-10 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-3 group-hover:scale-105 group-hover:rotate-[2deg]">
            <img 
              src={localbiteMockup2} 
              alt="Nerima Daikon Manju Product" 
              className="w-full h-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      ),
    },

    // -------------------------------------------------------------
    // CARD 3: Birla Estates Dashboard Design
    // -------------------------------------------------------------
    {
      id: 'birla',
      chips: isJa ? ['プロダクトデザイン', 'ダッシュボード', '不動産'] : ['Product Design', 'Dashboard', 'Real Estate'],
      mainHeading: 'Birla Estates',
      subHeadline: t.projects.birlaTitle,
      accentColor: '#242A1E',
      folderBg: '#E3DAAE',
      cardBg: '#CE9199',
      cardBorder: '#B87B84',
      tabWidth: 160,
      renderMockup: () => (
        <div className="relative w-full h-full flex items-center justify-center overflow-visible px-2 sm:px-3">
          {/* Dashboard Mockup - Centered in middle, no right overflow, top overflows pink box */}
          <div className="absolute left-1/2 -translate-x-1/2 -top-[12%] sm:-top-[15%] lg:-top-[17%] w-[92%] sm:w-[94%] lg:w-[95%] h-[126%] sm:h-[132%] flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-2.5 select-none pointer-events-none">
            <img 
              src={birlaMockup} 
              alt="Birla Estates Dashboard Mockup" 
              className="w-full h-full object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      ),
    },

    // -------------------------------------------------------------
    // CARD 4: MGT-Commerce Managed Magento Hosting Redesign
    // -------------------------------------------------------------
    {
      id: 'mgt-commerce',
      chips: isJa ? ['Webリニューアル', 'UI/UX', 'Eコマース'] : ['Website Redesign', 'UI/UX', 'eCommerce'],
      mainHeading: 'MGT-Commerce',
      subHeadline: t.projects.magentoTitle,
      accentColor: '#242A1E',
      folderBg: '#E3DAAE',
      cardBg: '#CE9199',
      cardBorder: '#B87B84',
      tabWidth: 170,
      renderMockup: () => (
        <div className="relative w-full h-full flex items-center justify-center overflow-visible">
          {/* Main Laptop Mockup - Moved down slightly for balanced top overflow */}
          <div className="absolute left-[2%] sm:left-[3%] -top-[9%] sm:-top-[12%] lg:-top-[14%] w-[88%] sm:w-[92%] h-[126%] sm:h-[132%] flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-2 select-none pointer-events-none">
            <img 
              src={mgtMockup1} 
              alt="MGT-Commerce Laptop Mockup" 
              className="w-full h-full object-contain object-top drop-shadow-2xl"
            />
          </div>

          {/* Floating Mobile Phone Mockup - Upright on right, harmonious with laptop */}
          <div className="absolute right-[5%] sm:right-[7%] top-[6%] sm:top-[4%] w-[22%] sm:w-[24%] max-w-[102px] h-[78%] sm:h-[82%] select-none pointer-events-none z-10 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-3 group-hover:scale-105">
            <img 
              src={mgtMockup2} 
              alt="MGT-Commerce Mobile Mockup" 
              className="w-full h-full object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      ),
    },
  ];

  if (excludeId) {
    projects = projects.filter(p => p.id !== excludeId);
  }
  if (limit) {
    projects = projects.slice(0, limit);
  }

  return (
    <section id="projects" className="pt-2 sm:pt-3 pb-4 sm:pb-6 overflow-visible">
      {/* Responsive Card Grid with Proportional Width and Height */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 sm:gap-y-8 lg:gap-y-9 gap-x-6 sm:gap-x-8 w-full">
        {projects.map((project, idx) => {
          return (
            <article
              key={project.id}
              onClick={() => onSelectProject?.(project.id)}
              className="group relative flex flex-col justify-between bg-transparent pt-5 sm:pt-7 overflow-visible cursor-pointer select-none transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] active:scale-[0.985] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#363C30] focus-visible:ring-offset-4"
              tabIndex={0}
              role="button"
              aria-label={`View project: ${project.mainHeading} — ${project.subHeadline}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectProject?.(project.id);
                }
              }}
              style={{
                animationDelay: `${idx * 100}ms`,
              }}
            >
              {/* Pink Box Container (Distinct top container with rounded-t-[28px], no hover shadow) */}
              <div 
                className="relative w-full rounded-[28px] overflow-visible flex flex-col justify-between"
                style={{ backgroundColor: project.cardBg }}
              >
                {/* ------------------------------------------------------------- */}
                {/* MIDDLE SHOWCASE AREA: Increased Height a bit & Bold Overflow  */}
                {/* ------------------------------------------------------------- */}
                <div className="relative w-full h-[235px] sm:h-[265px] lg:h-[285px] flex items-center justify-center overflow-visible px-2 sm:px-4 z-10 pointer-events-none">
                  {project.renderMockup()}
                </div>

                {/* ------------------------------------------------------------- */}
                {/* BOTTOM FOLDER SHAPE SECTION (Flush to Card Edges, sits on top) */}
                {/* ------------------------------------------------------------- */}
                <div className="w-full mt-auto relative z-20 rounded-b-[28px] overflow-hidden -mt-6 sm:-mt-8">
                  <div className="relative w-full">
                    {/* Responsive SVG Folder Tab Background extending flush to all card edges */}
                    <svg 
                      viewBox="0 0 380 176" 
                      preserveAspectRatio="none" 
                      className="absolute inset-0 w-full h-full pointer-events-none z-0"
                    >
                      {/* Folder Base Fill */}
                      <path 
                        d={`M 0,0 L ${project.tabWidth},0 C ${project.tabWidth + 14},0 ${project.tabWidth + 22},11 ${project.tabWidth + 28},19 C ${project.tabWidth + 34},27 ${project.tabWidth + 42},38 ${project.tabWidth + 56},38 L 380,38 L 380,176 L 0,176 Z`}
                        fill={project.folderBg} 
                      />
                    </svg>

                    {/* Content inside the folder tab with comfortable padding and height */}
                    <div className="relative z-10 px-5 sm:px-6 pt-3 sm:pt-3.5 pb-4 sm:pb-4.5 flex flex-col justify-between min-h-[152px] sm:min-h-[164px]">
                      {/* Top Row: Main Project Heading sitting inside the raised tab */}
                      <div className="flex items-center justify-between">
                        <h3 
                          className="font-['Inter'] font-bold text-[19.5px] sm:text-[21.5px] tracking-tight leading-none text-[#1E2319]"
                        >
                          {project.mainHeading}
                        </h3>
                      </div>

                      {/* Subtle Hairline Divider under the tab with generous spacing above */}
                      <div className="w-full h-[1px] mt-3 sm:mt-3.5 mb-2.5 sm:mb-3 bg-[#363C30]/12" />

                      {/* Sub-headline text made one step lighter (#363C30) for refined optical balance */}
                      <p className="font-['Inter'] font-semibold text-[15px] sm:text-[16.5px] md:text-[17px] leading-[21px] sm:leading-[24px] tracking-[-0.015em] text-[#363C30] [text-wrap:pretty] transition-colors duration-300 group-hover:text-[#1E2319]">
                        {project.subHeadline}
                      </p>

                      {/* Bottom Row: Category Chips on the left, Arrow Pill on the right */}
                      <div className="flex items-center justify-between gap-2 mt-2.5 sm:mt-3 pt-0.5">
                        <div className="flex flex-wrap items-center gap-1.5">
                          {project.chips.map((chip, i) => (
                            <span 
                              key={i}
                              className="inline-flex items-center px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full font-['Inter'] font-semibold text-[10.5px] sm:text-[11px] leading-none tracking-tight bg-[#FAF8EC] text-[#363C30] border border-[#363C30]/20 shadow-2xs select-none transition-all duration-300 group-hover:bg-white group-hover:border-[#363C30]/35 group-hover:scale-105"
                            >
                              {chip}
                            </span>
                          ))}
                        </div>

                        <div className="w-8 h-8 sm:w-8.5 sm:h-8.5 rounded-full bg-[#FAF8EC] text-[#242A1E] border border-[#363C30]/20 group-hover:bg-[#1E2319] group-hover:text-[#FAF8EC] group-hover:border-[#1E2319] flex items-center justify-center flex-shrink-0 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 shadow-2xs mb-0.5">
                          <ArrowUpRight className="w-4 h-4 stroke-[2.3] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectGrid;
