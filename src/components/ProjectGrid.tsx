import React from 'react';
import cloudpanelMockup1 from '../assets/CloudPanel-mockup-1.png';
import cloudpanelMockup2 from '../assets/CloudPanel-mockup-2.png';
import localbiteMockup1 from '../assets/localbite-mockup-1.png';
import localbiteMockup2 from '../assets/localbite-mockup-2.png';
import birlaMockup from '../assets/birla-mockup.png';
import mgtMockup1 from '../assets/mgt-commerce-mockup-1.png';
import mgtMockup2 from '../assets/mgt-commerce-mockup-2.png';

const noiseTexture = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`;

import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ProjectItem {
  id: string;
  tag: string;
  title: string;
  overflow?: 'visible' | 'hidden';
  renderMockup: () => React.ReactNode;
}

interface ProjectGridProps {
  onSelectProject?: (projectId: string) => void;
  excludeId?: string;
  limit?: number;
}

export const ProjectGrid: React.FC<ProjectGridProps> = ({ onSelectProject, excludeId, limit }) => {
  const { t } = useLanguage();

  let projects: ProjectItem[] = [
    // -------------------------------------------------------------
    // CARD 1: CloudPanel Website Redesign (TOP & TOP-LEFT OVERFLOW)
    // -------------------------------------------------------------
    {
      id: 'cloudpanel',
      tag: t.projects.cloudpanelTag,
      title: t.projects.cloudpanelTitle,
      overflow: 'visible',
      renderMockup: () => (
        <div className="relative w-full h-full flex items-center justify-center overflow-visible">
          {/* Background Tilted Screen 2 (Clipped strictly inside the pink box) */}
          <div className="absolute inset-0 w-full h-full rounded-t-[16px] overflow-hidden pointer-events-none">
            <div className="absolute -right-[2%] sm:-right-[5%] -top-[2%] sm:-top-[4%] w-[55%] sm:w-[60%] h-[105%] rounded-[10px] sm:rounded-[12px] overflow-hidden transform rotate-[7deg] translate-x-2 sm:translate-x-4 transition-transform duration-500 ease-out group-hover:scale-[1.02] group-hover:translate-x-5 select-none">
              <img 
                src={cloudpanelMockup2} 
                alt="CloudPanel Secondary Screen" 
                className="w-full h-full object-cover object-left opacity-90 shadow-2xl"
              />
            </div>
          </div>

          {/* Foreground Tilted Screen 1 (Overflows left and top outside pink box) */}
          <div className="absolute -left-[4%] sm:-left-[2%] -top-[8%] sm:-top-[10%] w-[56%] sm:w-[58%] h-[120%] rounded-[8px] sm:rounded-[12px] shadow-[12px_2px_20px_-2px_rgba(0,0,0,0.16)] overflow-hidden transform -rotate-[9deg] translate-x-[10px] transition-all duration-500 ease-out group-hover:scale-[1.02] group-hover:shadow-[16px_2px_24px_-2px_rgba(0,0,0,0.20)] select-none pointer-events-none z-10">
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
    // CARD 2: Helping people discover local specialities (TOP OVERFLOW)
    // -------------------------------------------------------------
    {
      id: 'localbite',
      tag: t.projects.localbiteTag,
      title: t.projects.localbiteTitle,
      overflow: 'visible',
      renderMockup: () => (
        <div className="relative w-full h-full flex items-center justify-center overflow-visible">
          {/* Main iPhone Device Mockup (LocalBite Mockup 1 - Top overflows outside pink box) */}
          <div className="absolute left-[9%] sm:left-[11%] -top-[12%] sm:-top-[15%] w-[62%] sm:w-[66%] h-[126%] select-none pointer-events-none transition-transform duration-500 ease-out group-hover:scale-[1.02]">
            <img 
              src={localbiteMockup1} 
              alt="LocalBite Mobile App" 
              className="w-full h-full object-contain object-top drop-shadow-2xl"
            />
          </div>

          {/* Floating Overlapping Product Badge (LocalBite Mockup 2 - Overlaps Phone with No Gap) */}
          <div className="absolute left-[48%] sm:left-[50%] top-[18%] sm:top-[16%] w-[38%] sm:w-[40%] max-w-[150px] select-none pointer-events-none z-10 transition-transform duration-500 ease-out group-hover:scale-105 group-hover:rotate-[1deg]">
            <img 
              src={localbiteMockup2} 
              alt="Nerima Daikon Manju Product" 
              className="w-full h-auto object-contain drop-shadow-xl"
            />
          </div>
        </div>
      ),
    },

    // -------------------------------------------------------------
    // CARD 3: One dashboard to track 8 property projects and their tasks
    // -------------------------------------------------------------
    {
      id: 'birla',
      tag: t.projects.birlaTag,
      title: t.projects.birlaTitle,
      overflow: 'hidden',
      renderMockup: () => (
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden p-1 sm:p-2">
          <div className="relative w-[110%] sm:w-[114%] h-[110%] sm:h-[114%] flex items-center justify-center transition-transform duration-500 ease-out group-hover:scale-[1.03] select-none pointer-events-none">
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
      tag: t.projects.magentoTag,
      title: t.projects.magentoTitle,
      overflow: 'visible',
      renderMockup: () => (
        <div className="relative w-full h-full flex items-center justify-center overflow-visible">
          {/* Main Laptop Mockup (Top overflows above pink box, bottom tucks behind caption box) */}
          <div className="absolute left-[3%] sm:left-[4%] -top-[5%] sm:-top-[7%] w-[88%] sm:w-[92%] h-[126%] sm:h-[130%] flex items-center justify-center transition-transform duration-500 ease-out group-hover:scale-[1.02] select-none pointer-events-none">
            <img 
              src={mgtMockup1} 
              alt="MGT-Commerce Laptop Mockup" 
              className="w-full h-full object-contain object-top drop-shadow-2xl"
            />
          </div>

          {/* Floating Mobile Phone Mockup (Upright, overlapping right side of laptop) */}
          <div className="absolute right-[5%] sm:right-[7%] top-[10%] sm:top-[9%] w-[22%] sm:w-[24%] max-w-[100px] h-[72%] sm:h-[75%] select-none pointer-events-none z-10 transition-transform duration-500 ease-out group-hover:scale-105">
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
      {/* Responsive Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 sm:gap-y-6 gap-x-6 sm:gap-x-7">
        {projects.map((project, idx) => {
          const isOverflowVisible = project.overflow === 'visible';

          return (
            <article
              key={project.id}
              onClick={() => onSelectProject?.(project.id)}
              className="group relative flex flex-col rounded-[16px] bg-transparent cursor-pointer select-none transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:shadow-[0_12px_32px_rgba(54,60,48,0.08)] active:scale-[0.99] overflow-visible pt-4 sm:pt-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#363C30] focus-visible:ring-offset-4"
              tabIndex={0}
              role="button"
              aria-label={`View project: ${project.title.replace(/\n/g, ' ')}`}
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
              {/* ------------------------------------------------------------- */}
              {/* TOP SHOWCASE BACKDROP BOX                                     */}
              {/* ------------------------------------------------------------- */}
              <div 
                className={`relative w-full h-[260px] sm:h-[290px] lg:h-[310px] rounded-t-[16px] ${
                  isOverflowVisible ? 'overflow-visible' : 'overflow-hidden'
                }`}
                style={{ backgroundColor: '#CE9199' }}
              >
                {/* Subtle Grainy Noise Texture on Pink */}
                <div 
                  className="absolute inset-0 w-full h-full rounded-t-[16px] pointer-events-none opacity-25 mix-blend-overlay z-0"
                  style={{ backgroundImage: noiseTexture }}
                />

                {/* Subtle Light Shimmer Sweep on Hover */}
                <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden rounded-t-[16px] z-20">
                  <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-light-sweep transition-opacity duration-300 pointer-events-none" />
                </div>

                {project.renderMockup()}
              </div>

              {/* ------------------------------------------------------------- */}
              {/* BOTTOM CAPTION BOX (UNIFIED FOLDER SHAPE & GRAIN TEXTURE)    */}
              {/* ------------------------------------------------------------- */}
              <div className="relative z-30 isolate -mt-11 sm:-mt-12 min-h-[140px] sm:min-h-[155px] flex flex-col justify-end px-4 sm:px-5 pt-9 sm:pt-10 pb-6 sm:pb-7">
                {/* Unified Folder Shape with Grain Texture & Zero Seams */}
                <svg 
                  viewBox="0 0 400 150" 
                  preserveAspectRatio="none" 
                  className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible"
                >
                  <defs>
                    <pattern id={`folderNoise-${project.id}`} width="100" height="100" patternUnits="userSpaceOnUse">
                      <image href={`data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E`} width="100" height="100" />
                    </pattern>
                  </defs>

                  {/* Solid Base Yellow Sand Fill (Flush Left & Right Outer Edges) */}
                  <path 
                    d="M 0,0 L 160,0 C 180,0 185,30 205,30 L 400,30 L 400,134 C 400,142.84 392.84,150 384,150 L 16,150 C 7.16,150 0,142.84 0,134 Z" 
                    fill="#E3DAAE" 
                  />

                  {/* Grain Texture Overlay Clipped to Exact Folder Silhouette */}
                  <path 
                    d="M 0,0 L 160,0 C 180,0 185,30 205,30 L 400,30 L 400,134 C 400,142.84 392.84,150 384,150 L 16,150 C 7.16,150 0,142.84 0,134 Z"
                    fill={`url(#folderNoise-${project.id})`} 
                    opacity="0.20" 
                    style={{ mixBlendMode: 'multiply' }} 
                  />
                </svg>

                {/* Top-Left Folder Tab Chip Badge */}
                <div className="absolute top-2 sm:top-2.5 left-4 sm:left-5 z-30 pointer-events-none">
                  <span 
                    className="inline-block px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-[4px] font-['Inter'] font-semibold text-[12px] sm:text-[13px] leading-tight tracking-normal select-none transition-transform duration-300 group-hover:scale-105"
                    style={{ backgroundColor: '#FAF8EC', color: '#363C30' }}
                  >
                    {project.tag}
                  </span>
                </div>

                {/* Project Title & Interactive Arrow Pill */}
                <div className="flex items-end justify-between gap-3 relative z-30">
                  <h3 
                    className="font-['Inter'] font-bold text-[18px] sm:text-[20px] md:text-[21px] leading-[24px] sm:leading-[26px] md:leading-[28px] tracking-tight whitespace-pre-line flex-1 [text-wrap:balance]"
                    style={{ color: '#1E2319' }}
                  >
                    {project.title}
                  </h3>
                  <div className="w-8 h-8 rounded-full bg-[#FAF8EC] text-[#363C30] group-hover:bg-[#363C30] group-hover:text-[#FAF8EC] flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 shadow-xs mb-0.5">
                    <ArrowUpRight className="w-4 h-4 stroke-[2.2] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
