import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight, Copy, X } from 'lucide-react';
import profilePic from '../assets/me2.jpg';
import { PageMascot } from './PageMascot';
import { useLanguage } from '../context/LanguageContext';

import { ArrowLeft } from 'lucide-react';

interface SidebarProps {
  isInnerPage?: boolean;
}

export const Sidebar: React.FC<SidebarProps> = ({ isInnerPage }) => {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const email = "tzee.zende@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {/* ------------------------------------------------------------- */}
      {/* MOBILE & TABLET HEADER + EXPANDABLE MENU (< lg breakpoint)     */}
      {/* ------------------------------------------------------------- */}
      <div className="w-full lg:hidden bg-[#FAF8EC] z-30 pt-6 sm:pt-8 px-6 sm:px-10">
        {/* Top Bar Row: Profile Pill on Left, Menu/Close Button on Right */}
        <div className="flex items-center justify-between w-full">
          {/* Profile Pill */}
          {isInnerPage ? (
            <div className="h-[40px] flex items-center">
              <button
                onClick={() => window.location.hash = ''}
                className="group inline-flex items-center gap-2.5 text-[#363C30] hover:opacity-85 font-medium text-[15px] sm:text-[16px] transition-colors duration-200 cursor-pointer select-none"
              >
                <ArrowLeft className="w-4 h-4 stroke-[2.2] transition-transform group-hover:-translate-x-1" />
                <span>{t.caseStudy.backToHome}</span>
              </button>
            </div>
          ) : (
            <div 
            className="w-auto min-w-[142px] h-[40px] box-border inline-flex items-center gap-2 pl-[3px] pr-[12px] bg-[#FAF8EC] transition-all hover:opacity-90"
            style={{
              borderWidth: '2px',
              borderStyle: 'dashed',
              borderColor: '#E3DAAE',
              borderRadius: '24px',
            }}
          >
            <div 
              className="relative w-[30px] h-[30px] flex-shrink-0 p-[1.5px] flex items-center justify-center overflow-hidden"
              style={{
                backgroundColor: '#FAF8EC',
                borderRadius: '50%',
                boxShadow: 'rgba(54, 60, 48, 0.16) 0px 4px 8px 0px',
              }}
            >
              <img 
                src={profilePic} 
                alt="Teja Profile" 
                className="w-full h-full object-cover object-[50%_35%]"
                style={{ borderRadius: '50%' }}
              />
            </div>
            <span 
              className="font-['Inter'] font-semibold text-[14px] leading-[17px] tracking-normal whitespace-nowrap"
              style={{ color: '#363C30' }}
            >
              {t.sidebar.greeting}
            </span>
          </div>
          )}

          {/* Menu / Close Pill Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-white font-medium text-[14px] leading-none shadow-xs transition-all duration-200 hover:opacity-90 active:scale-95 cursor-pointer focus:outline-none select-none"
            style={{ backgroundColor: '#363C30' }}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? t.sidebar.menuClose : t.sidebar.menuOpen}
          >
            <span>{mobileMenuOpen ? t.sidebar.menuClose : t.sidebar.menuOpen}</span>
            {mobileMenuOpen ? (
              <X className="w-3.5 h-3.5 stroke-[2.5]" />
            ) : (
              <div className="flex flex-col gap-[3.5px] w-3.5 justify-center items-center">
                <span className="w-full h-[2px] bg-white rounded-full"></span>
                <span className="w-full h-[2px] bg-white rounded-full"></span>
              </div>
            )}
          </button>
        </div>

        {/* Expandable Menu Section (Shown directly underneath header on open) */}
        <div 
          className={`w-full overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen 
              ? 'max-h-[380px] opacity-100 pt-7 pb-4' 
              : 'max-h-0 opacity-0 pointer-events-none'
          }`}
        >
          <div className="flex flex-col space-y-4">
            {/* Link 1: See all projects */}
            {!isInnerPage && (
            <a 
              href="#/projects" 
              onClick={() => setMobileMenuOpen(false)}
              className="group inline-flex items-center gap-2.5 font-['Inter'] font-medium text-[24px] sm:text-[28px] leading-tight tracking-tight transition-all"
              style={{ color: '#363C30' }}
            >
              <span>{t.sidebar.seeProjects}</span>
              <ArrowRight className="w-6 h-6 stroke-[2.2] transition-transform group-hover:translate-x-1" />
            </a>
            )}

            {/* Link 2: About me */}
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="group inline-flex items-center gap-2.5 font-['Inter'] font-medium text-[24px] sm:text-[28px] leading-tight tracking-tight transition-all"
              style={{ color: '#363C30' }}
            >
              <span>{t.sidebar.aboutMe}</span>
              <ArrowRight className="w-6 h-6 stroke-[2.2] transition-transform group-hover:translate-x-1" />
            </a>

            {/* Link 3: Gallery */}
            <a 
              href="#gallery" 
              onClick={() => setMobileMenuOpen(false)}
              className="group inline-flex items-center gap-2.5 font-['Inter'] font-medium text-[24px] sm:text-[28px] leading-tight tracking-tight transition-all"
              style={{ color: '#363C30' }}
            >
              <span>{t.sidebar.gallery}</span>
              <ArrowRight className="w-6 h-6 stroke-[2.2] transition-transform group-hover:translate-x-1" />
            </a>

            {/* Link 4: My LinkedIn */}
            <div className="pt-0.5">
              <a 
                href="https://www.linkedin.com/in/tejashree-zende/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 font-['Inter'] font-medium text-[15px] sm:text-[16px] leading-[24px] text-[#5C6454] hover:text-[#363C30] transition-colors duration-200 cursor-pointer"
              >
                <span>{t.sidebar.linkedIn}</span>
                <span className="relative w-5 h-5 inline-flex items-center justify-center">
                  <ArrowUpRight className="w-[18px] h-[18px] absolute transition-all duration-200 group-hover:opacity-0 group-hover:scale-75 stroke-[2.2] text-[#5C6454]" />
                  <ArrowRight className="w-[18px] h-[18px] absolute opacity-0 scale-75 transition-all duration-200 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-0.5 stroke-[2.2] text-[#363C30]" />
                </span>
              </a>
            </div>

            {/* Link 5: Copy Email Widget */}
            <div 
              onClick={handleCopyEmail}
              className="flex items-center gap-3 cursor-pointer group select-none pt-0.5"
              title="Click to copy email"
            >
              <div className="relative h-[24px] overflow-hidden flex items-center min-w-[190px]">
                {/* Original Email Text */}
                <span 
                  className={`font-['Inter'] font-medium text-[16px] leading-[24px] tracking-normal transition-all duration-300 ease-out absolute left-0 ${
                    copied ? '-translate-y-full opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'
                  }`}
                  style={{ color: '#363C30' }}
                >
                  {email}
                </span>

                {/* Replacement 'Copied to Clipboard' Text */}
                <span 
                  className={`font-['Inter'] font-medium text-[16px] leading-[24px] tracking-normal whitespace-nowrap transition-all duration-300 ease-out absolute left-0 ${
                    copied ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'
                  }`}
                  style={{ color: '#363C30' }}
                >
                  {t.sidebar.copied}
                </span>
              </div>

              <button
                type="button"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center text-white transition-all duration-200 group-hover:scale-105 active:scale-95 flex-shrink-0 shadow-xs focus:outline-none"
                style={{ backgroundColor: '#363C30' }}
                aria-label="Copy Email"
              >
                <Copy className="w-3.5 h-3.5 stroke-[2]" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* DESKTOP STICKY SIDEBAR (lg: breakpoint and above)              */}
      {/* ------------------------------------------------------------- */}
      <aside className="hidden lg:flex w-[310px] xl:w-[340px] lg:sticky lg:top-0 lg:self-start lg:h-screen pt-[54px] lg:pl-[60px] pr-4 xl:pr-6 pb-10 flex-col justify-between bg-[#FAF8EC] z-10 flex-shrink-0">
        <div>
          {/* Profile Pill - Dashed Sand Pill with Shadowed Avatar */}
          {isInnerPage ? (
          <div className="h-[34px] flex items-center mb-10 mt-1.5">
            <button
              onClick={() => window.location.hash = ''}
              className="group inline-flex items-center gap-2.5 text-[#363C30] hover:opacity-85 font-medium text-[15px] sm:text-[16px] transition-colors duration-200 cursor-pointer select-none"
            >
              <ArrowLeft className="w-4 h-4 stroke-[2.2] transition-transform group-hover:-translate-x-1" />
              <span>{t.caseStudy.backToHome}</span>
            </button>
          </div>
        ) : (
          <div 
            className="w-auto min-w-[142px] h-[40px] box-border inline-flex items-center gap-2 pl-[3px] pr-[12px] bg-[#FAF8EC] transition-all hover:opacity-90 mb-10"
            style={{
              borderWidth: '2px',
              borderStyle: 'dashed',
              borderColor: '#E3DAAE',
              borderRadius: '24px',
              opacity: 1,
            }}
          >
            <div 
              className="relative w-[30px] h-[30px] flex-shrink-0 p-[1.5px] flex items-center justify-center overflow-hidden"
              style={{
                backgroundColor: '#FAF8EC',
                borderRadius: '50%',
                boxShadow: 'rgba(54, 60, 48, 0.16) 0px 4px 8px 0px',
                opacity: 1,
              }}
            >
              <img 
                src={profilePic} 
                alt="Teja Profile" 
                className="w-full h-full object-cover object-[50%_35%]"
                style={{ borderRadius: '50%' }}
              />
            </div>
            <span 
              className="font-['Inter'] font-semibold text-[14px] leading-[17px] tracking-normal whitespace-nowrap"
              style={{ color: '#363C30' }}
            >
              {t.sidebar.greeting}
            </span>
          </div>
          )}

          {/* Koboyo Interactive Page Mascot */}
          <div className="-ml-[1.3rem] -mb-[0.6rem] flex items-center">
            <PageMascot 
              directions="/mascots/cat-directions.webp"
              reactions="/mascots/cat-reactions.webp"
              size={115} 
            />
          </div>

          {/* Bio Text */}
          <p 
            className="font-['Inter'] font-normal text-[15px] sm:text-[16px] leading-[22px] sm:leading-[24px] w-[248px] mb-8"
            style={{ color: '#5C6454' }}
          >
            {t.sidebar.bio}
          </p>

          {/* Primary Action Links */}
          <div className="space-y-3 pt-2">
            {!isInnerPage && (
            <a 
              href="#/projects" 
              className="group inline-flex items-center gap-2 font-['Inter'] font-medium text-[16px] leading-[26px] transition-all hover:opacity-85"
              style={{ color: '#363C30' }}
            >
              <span>{t.sidebar.seeProjects}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 stroke-[2.2]" style={{ color: '#363C30' }} />
            </a>
            )}
            <div>
              <a 
                href="#about" 
                className="group inline-flex items-center gap-2 font-['Inter'] font-medium text-[16px] leading-[26px] transition-all hover:opacity-85"
                style={{ color: '#363C30' }}
              >
                <span>{t.sidebar.aboutMe}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 stroke-[2.2]" style={{ color: '#363C30' }} />
              </a>
            </div>
            <div>
              <a 
                href="#gallery" 
                className="group inline-flex items-center gap-2 font-['Inter'] font-medium text-[16px] leading-[26px] transition-all hover:opacity-85"
                style={{ color: '#363C30' }}
              >
                <span>{t.sidebar.gallery}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 stroke-[2.2]" style={{ color: '#363C30' }} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer / Social & Email Copy */}
        <div className="space-y-4 pt-10 lg:pt-0">
          <div>
            <a 
              href="https://www.linkedin.com/in/tejashree-zende/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 font-['Inter'] font-medium text-[16px] leading-[26px] text-[#5C6454] hover:text-[#363C30] transition-colors duration-200 cursor-pointer"
            >
              <span>{t.sidebar.linkedIn}</span>
              <span className="relative w-5 h-5 inline-flex items-center justify-center">
                <ArrowUpRight className="w-[18px] h-[18px] absolute transition-all duration-200 group-hover:opacity-0 group-hover:scale-75 stroke-[2.2] text-[#5C6454]" />
                <ArrowRight className="w-[18px] h-[18px] absolute opacity-0 scale-75 transition-all duration-200 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-0.5 stroke-[2.2] text-[#363C30]" />
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
                className={`font-['Inter'] font-medium text-[16px] leading-[24px] tracking-normal transition-all duration-300 ease-out absolute left-0 ${
                  copied ? '-translate-y-full opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'
                }`}
                style={{ color: '#363C30' }}
              >
                {email}
              </span>

              {/* Replacement 'Copied to Clipboard' Text */}
              <span 
                className={`font-['Inter'] font-medium text-[16px] leading-[24px] tracking-normal whitespace-nowrap transition-all duration-300 ease-out absolute left-0 ${
                  copied ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'
                }`}
                style={{ color: '#363C30' }}
              >
                {t.sidebar.copied}
              </span>
            </div>

            <button
              type="button"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white transition-all duration-200 group-hover:scale-105 active:scale-95 flex-shrink-0 shadow-sm focus:outline-none"
              style={{ backgroundColor: '#363C30' }}
              aria-label="Copy Email"
            >
              <Copy className="w-4 h-4 stroke-[2]" />
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

