import React, { useState, useEffect } from 'react';
import { ProjectGrid } from './ProjectGrid';
import { 
  ArrowLeft, 
  ArrowUpRight, 
  ArrowRight, 
  Copy, 
  Check
} from 'lucide-react';
import { Footer } from './Footer';
import { useLanguage } from '../context/LanguageContext';
import { cloudpanelContent } from '../locales/caseStudies/cloudpanel';
import cloudpanelVideo from '../assets/cloudpanel-homepage-desktop.mov';
import cloudpanelMobileVideo from '../assets/cloudpanel-mobile-homepage.mov';
import cloudpanelIntroImage from '../assets/cloudpanel-homepage-introduction.png';
import cloudpanelOtherPages from '../assets/cloudpanel-other-pages.png';
import cloudpanelAllScreens from '../assets/cloudpanel-all-screens.png';
import cloudpanelDesignSystem from '../assets/cloudpanel-design-system.png';
import oldCloudpanel from '../assets/old-cloudpanel.png';

interface CloudPanelCaseStudyProps {
  onBack: () => void;
  onSelectProject?: (id: string) => void;
}



export const CloudPanelCaseStudy: React.FC<CloudPanelCaseStudyProps> = ({ onBack, onSelectProject }) => {
  const { t, language } = useLanguage();
  const content = cloudpanelContent[language];
  const [activeSection, setActiveSection] = useState<string>('introduction');
  const [copied, setCopied] = useState(false);
  const email = "tzee.zende@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const navItems = [
    { id: 'introduction', label: content.nav.introduction },
    { id: 'what-changed', label: content.nav.results },
    { id: 'challenge', label: content.nav.challenge },
    { id: 'research', label: content.nav.research },
    { id: 'design-system', label: content.nav.designSystem },
    { id: 'final-experience', label: content.nav.finalExperience },
    { id: 'results', label: content.nav.reflections },
  ];

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF8EC] text-[#363C30] font-sans antialiased selection:bg-[#E3DAAE] selection:text-[#363C30]">
      {/* ------------------------------------------------------------- */}
      {/* MOBILE STICKY TOP BAR (< lg) - Sticks for the entire scroll   */}
      {/* ------------------------------------------------------------- */}
      <div className="w-full lg:hidden sticky top-0 z-40 bg-[#FAF8EC]/95 backdrop-blur-md border-b border-[#E3DAAE]/60 py-3.5 px-6 sm:px-10 shadow-[0_2px_12px_rgba(54,60,48,0.03)] transition-colors">
        <div className="flex items-center h-[34px]">
          <button
            onClick={onBack}
            className="group inline-flex items-center gap-2.5 text-[#363C30] hover:opacity-85 font-medium text-[15px] sm:text-[16px] transition-colors duration-200 cursor-pointer select-none"
          >
            <ArrowLeft className="w-4 h-4 stroke-[2.2] transition-transform group-hover:-translate-x-1" />
            <span>{t.caseStudy.backToHome}</span>
          </button>
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* UNIFIED 2-COLUMN LAYOUT (CENTERED)                             */}
      {/* ------------------------------------------------------------- */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-[60px] pt-6 sm:pt-8 lg:pt-[50px] pb-12 lg:pb-[40px] flex flex-col lg:flex-row gap-8 lg:gap-14 items-start">
        
        {/* ----------------------------------------------------------- */}
        {/* LEFT COLUMN: BACK LINK + FLOATING SIDEBAR + CONTACT         */}
        {/* ----------------------------------------------------------- */}
        <aside className="w-full lg:w-[260px] xl:w-[280px] lg:flex-shrink-0 lg:sticky lg:top-10 lg:h-[calc(100vh-80px)] flex flex-col justify-between self-start">
          
          <div>
            {/* Desktop Back button (hidden on mobile since sticky bar is above) */}
            <div className="hidden lg:flex h-[34px] items-center mb-6 sm:mb-7">
              <button
                onClick={onBack}
                className="group inline-flex items-center gap-2.5 text-[#363C30] hover:opacity-85 font-medium text-[15px] sm:text-[16px] transition-colors duration-200 cursor-pointer select-none"
              >
                <ArrowLeft className="w-4 h-4 stroke-[2.2] transition-transform group-hover:-translate-x-1" />
                <span>{t.caseStudy.backToHome}</span>
              </button>
            </div>

            {/* Floating Navigation Card */}
            <nav className="bg-[#FFFFFF] rounded-[24px] sm:rounded-[28px] py-[20px] px-[20px] sm:px-[24px] shadow-[0_10px_30px_rgba(54,60,48,0.06)] border border-[#E3DAAE]/50 flex flex-col gap-4 sm:gap-[18px]">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-left font-['Inter'] text-[15px] sm:text-[16px] leading-[22px] transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'font-bold text-[#363C30]'
                        : 'font-medium text-[#5C6454] hover:text-[#363C30] active:scale-95'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Bottom Contact Section */}
          <div className="hidden lg:flex flex-col gap-4 mt-auto pt-6">
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

            {/* Email Address & Circular Copy Button */}
            <div 
              onClick={handleCopyEmail}
              className="flex items-center gap-3 cursor-pointer group select-none"
              title="Click to copy email"
            >
              <div className="relative h-[24px] overflow-hidden flex items-center min-w-[190px]">
                <span 
                  className={`font-['Inter'] font-medium text-[16px] leading-[24px] tracking-normal transition-all duration-300 ease-out absolute left-0 ${
                    copied ? '-translate-y-full opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'
                  }`}
                  style={{ color: '#363C30' }}
                >
                  {email}
                </span>

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
                {copied ? <Check className="w-4 h-4 stroke-[2.5]" /> : <Copy className="w-4 h-4 stroke-[2]" />}
              </button>
            </div>
          </div>
        </aside>

        {/* ----------------------------------------------------------- */}
        {/* RIGHT COLUMN: MAIN CASE STUDY CONTENT                        */}
        {/* ----------------------------------------------------------- */}
        <main className="w-full flex-1 min-w-0 flex flex-col space-y-12 sm:space-y-16">
          
          {/* Hero Header */}
          <div>
            <div className="h-[34px] flex items-center justify-between mb-6">
              <span className="inline-flex items-center justify-center px-3 py-1.5 rounded-[6px] font-['Inter'] font-semibold text-[12px] sm:text-[13px] bg-[#E3DAAE]/40 text-[#363C30]">
                {content.hero.badge}
              </span>

              <a
                href="https://www.cloudpanel.io"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1 text-[#363C30] hover:opacity-85 font-medium text-[15px] sm:text-[16px] transition-colors duration-200"
              >
                <span>{content.hero.liveLink}</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.2] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            <h1 className="font-['Inter'] font-medium text-[32px] sm:text-[40px] sm:leading-[44px] leading-tight tracking-tight text-[#363C30] mb-4">
              {content.hero.title}
            </h1>

            <p className="font-['Inter'] font-normal text-[16px] leading-[26px] text-[#5C6454] max-w-3xl mb-6">
              {content.hero.description}
            </p>

            {/* Project Metadata - 4 Distinct Cards with Dashed Border */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-2">
              <div className="bg-transparent border-2 border-dashed border-[#E3DAAE] rounded-[14px] p-3.5 sm:p-4 flex flex-col justify-between">
                <span className="font-['Inter'] text-[12px] font-medium tracking-wide uppercase text-[#5C6454]/80 mb-1">
                  {content.hero.meta.industryLabel}
                </span>
                <span className="font-['Inter'] font-semibold text-[15px] sm:text-[16px] text-[#363C30] leading-snug">
                  {content.hero.meta.industryValue}
                </span>
              </div>

              <div className="bg-transparent border-2 border-dashed border-[#E3DAAE] rounded-[14px] p-3.5 sm:p-4 flex flex-col justify-between">
                <span className="font-['Inter'] text-[12px] font-medium tracking-wide uppercase text-[#5C6454]/80 mb-1">
                  {content.hero.meta.roleLabel}
                </span>
                <span className="font-['Inter'] font-semibold text-[15px] sm:text-[16px] text-[#363C30] leading-snug">
                  {content.hero.meta.roleValue}
                </span>
              </div>

              <div className="bg-transparent border-2 border-dashed border-[#E3DAAE] rounded-[14px] p-3.5 sm:p-4 flex flex-col justify-between">
                <span className="font-['Inter'] text-[12px] font-medium tracking-wide uppercase text-[#5C6454]/80 mb-1">
                  {content.hero.meta.timelineLabel}
                </span>
                <span className="font-['Inter'] font-semibold text-[15px] sm:text-[16px] text-[#363C30] leading-snug">
                  {content.hero.meta.timelineValue}
                </span>
              </div>

              <div className="bg-transparent border-2 border-dashed border-[#E3DAAE] rounded-[14px] p-3.5 sm:p-4 flex flex-col justify-between">
                <span className="font-['Inter'] text-[12px] font-medium tracking-wide uppercase text-[#5C6454]/80 mb-1">
                  {content.hero.meta.teamLabel}
                </span>
                <span className="font-['Inter'] font-semibold text-[15px] sm:text-[16px] text-[#363C30] leading-snug">
                  {content.hero.meta.teamValue}
                </span>
              </div>
            </div>
          </div>


          {/* ========================================================= */}
          {/* SECTION 1: INTRODUCTION                                   */}
          {/* ========================================================= */}
          <section id="introduction" className="scroll-mt-28">
            <div className="my-6 w-full rounded-[18px] sm:rounded-[24px] overflow-hidden border border-[#E3DAAE]/60">
              <img
                src={cloudpanelIntroImage}
                alt="CloudPanel Homepage Introduction"
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="my-6 w-full rounded-[18px] sm:rounded-[24px] overflow-hidden border border-[#E3DAAE]/60">
              <img
                src={cloudpanelOtherPages}
                alt="CloudPanel Other Pages"
                className="w-full h-auto object-cover"
              />
            </div>
          </section>

          {/* ========================================================= */}
          {/* SECTION 2: RESULTS                                        */}
          {/* ========================================================= */}
          <section id="what-changed" className="scroll-mt-28 pt-8">
            {/* Header: Title on Left, Subtext on Right */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-12 mb-8">
              <h2 className="font-['Inter'] font-medium text-[32px] sm:text-[38px] text-[#363C30] tracking-tight shrink-0">
                {content.results.title}
              </h2>
              <p className="font-['Inter'] text-[15px] sm:text-[16px] leading-[26px] text-[#5C6454] max-w-xl">
                {content.results.subtitle}
              </p>
            </div>

            {/* 3 Metrics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-4">
              {content.results.metrics.map((metric, idx) => (
                <div key={idx} className="bg-transparent border-2 border-dashed border-[#E3DAAE] rounded-[16px] p-6 sm:p-7 flex flex-col justify-end min-h-[140px] sm:min-h-[150px]">
                  <div>
                    <span className="font-['Inter'] font-bold text-[36px] sm:text-[44px] text-[#363C30] block leading-none mb-2">
                      {metric.value}
                    </span>
                    <span className="font-['Inter'] text-[14px] sm:text-[15px] text-[#5C6454]">
                      {metric.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Footnote with subtle dashed prefix line */}
            <div className="flex items-center gap-3 pt-2">
              <span className="w-6 h-[1px] bg-[#E3DAAE]" />
              <p className="font-['Inter'] text-[12px] sm:text-[13px] italic text-[#5C6454]/70">
                {content.results.footnote}
              </p>
            </div>
          </section>

          {/* ========================================================= */}
          {/* SECTION 3: THE CHALLENGE                                  */}
          {/* ========================================================= */}
          <section id="challenge" className="scroll-mt-28 pt-8">
            <h2 className="font-['Inter'] font-medium text-[28px] sm:text-[32px] text-[#363C30] mb-4">
              {content.challenge.title}
            </h2>

            <p className="font-['Inter'] text-[16px] leading-[26px] text-[#5C6454] mb-4">
              {content.challenge.p1}
            </p>

            <ul className="list-disc list-inside space-y-2 font-['Inter'] font-medium text-[16px] text-[#363C30] pl-2 mb-4">
              {content.challenge.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>

            <p className="font-['Inter'] text-[16px] leading-[26px] text-[#5C6454] mb-6">
              {content.challenge.p2}
            </p>

            {/* Old Homepage Image */}
            <div className="my-6 w-full rounded-[18px] sm:rounded-[24px] overflow-hidden border border-[#E3DAAE]/60">
              <img
                src={oldCloudpanel}
                alt="Old CloudPanel Homepage Annotated"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Caption */}
            <div className="flex items-center gap-3 -mt-3 mb-6">
              <span className="w-6 h-[1px] bg-[#E3DAAE]" />
              <p className="font-['Inter'] text-[12px] sm:text-[13px] italic text-[#5C6454]/70">
                {content.challenge.oldDesignCaption}
              </p>
            </div>

            <blockquote className="border-l-4 border-[#363C30] pl-4 my-6 italic text-[17px] sm:text-[18px] text-[#363C30] font-medium">
              {content.challenge.quote}
            </blockquote>
          </section>

          {/* ========================================================= */}
          {/* SECTION 4: FINDING WHERE EXPERIENCE BROKE DOWN           */}
          {/* ========================================================= */}
          <section id="research" className="scroll-mt-28 pt-8">
            <h2 className="font-['Inter'] font-medium text-[28px] sm:text-[32px] text-[#363C30] mb-4">
              {content.research.title}
            </h2>

            <p className="font-['Inter'] text-[16px] leading-[26px] text-[#5C6454] mb-6">
              {content.research.p1}
            </p>

            <div className="mt-10 space-y-4">
              <h3 className="font-['Inter'] font-medium text-[24px] sm:text-[26px] text-[#363C30]">
                {content.research.iaTitle}
              </h3>

              {/* VISUAL 11: REDESIGNED SITEMAP TREE DIAGRAM */}
              <div className="my-6 w-full rounded-[24px] bg-[#FAF8EC] border-2 border-dashed border-[#E3DAAE] p-6 sm:p-10 lg:p-12 overflow-x-auto">
                <div className="min-w-[820px] max-w-[960px] mx-auto flex flex-col items-center">
                  
                  {/* Root Node: Homepage */}
                  <div className="relative z-10 bg-[#FFFFFF] border border-[#E3DAAE] rounded-[10px] px-10 py-3.5 min-h-[48px] flex items-center justify-center shadow-[0_2px_8px_rgba(54,60,48,0.04)] text-center">
                    <span className="font-['Inter'] font-semibold text-[15px] sm:text-[16px] text-[#363C30]">
                      {content.research.sitemap.homepage}
                    </span>
                  </div>

                  {/* SVG Connector from Root to 5 Category Headers */}
                  <div className="w-full h-12 -my-0.5 pointer-events-none">
                    <svg className="w-full h-full" viewBox="0 0 820 48" fill="none" preserveAspectRatio="none">
                      {/* Vertical line coming down from Homepage center */}
                      <line x1="410" y1="0" x2="410" y2="24" stroke="#E3DAAE" strokeWidth="1.5" />
                      {/* Horizontal bus line connecting 5 columns (centered at: 82, 246, 410, 574, 738) */}
                      <line x1="82" y1="24" x2="738" y2="24" stroke="#E3DAAE" strokeWidth="1.5" />
                      {/* Drop-down stems to each category header */}
                      <line x1="82" y1="24" x2="82" y2="48" stroke="#E3DAAE" strokeWidth="1.5" />
                      <line x1="246" y1="24" x2="246" y2="48" stroke="#E3DAAE" strokeWidth="1.5" />
                      <line x1="410" y1="24" x2="410" y2="48" stroke="#E3DAAE" strokeWidth="1.5" />
                      <line x1="574" y1="24" x2="574" y2="48" stroke="#E3DAAE" strokeWidth="1.5" />
                      <line x1="738" y1="24" x2="738" y2="48" stroke="#E3DAAE" strokeWidth="1.5" />
                    </svg>
                  </div>

                  {/* 5 Columns Layout */}
                  <div className="w-full grid grid-cols-5 gap-4">
                    
                    {/* Branch 1: Product */}
                    <div className="flex flex-col">
                      <div className="w-full bg-[#E3DAAE]/30 border border-[#E3DAAE] rounded-[8px] py-3.5 px-2 min-h-[46px] flex items-center justify-center text-center mb-3">
                        <span className="font-['Inter'] font-semibold text-[13px] sm:text-[14px] text-[#363C30]">{content.research.sitemap.product.title}</span>
                      </div>
                      <div className="flex flex-col gap-2.5">
                        {content.research.sitemap.product.items.map((item, i, arr) => (
                          <div key={i} className="flex items-center">
                            {/* Branch connector line from left to card */}
                            <div className="flex items-center pl-3 relative flex-1">
                              <span className={`absolute left-3 top-[-10px] w-[1.5px] bg-[#E3DAAE] ${i === arr.length - 1 ? 'h-[calc(50%+10px)]' : 'bottom-0'}`} />
                              <span className="w-2.5 h-[1.5px] bg-[#E3DAAE] shrink-0" />
                              <div className="flex-1 bg-[#FFFFFF] rounded-[8px] border border-[#E3DAAE]/70 py-3 px-2.5 min-h-[44px] flex items-center justify-center text-center text-[12px] font-['Inter'] text-[#5C6454] leading-snug shadow-xs">
                                {item}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Branch 2: Resources */}
                    <div className="flex flex-col">
                      <div className="w-full bg-[#E3DAAE]/30 border border-[#E3DAAE] rounded-[8px] py-3.5 px-2 min-h-[46px] flex items-center justify-center text-center mb-3">
                        <span className="font-['Inter'] font-semibold text-[13px] sm:text-[14px] text-[#363C30]">{content.research.sitemap.resources.title}</span>
                      </div>
                      <div className="flex flex-col gap-2.5">
                        {content.research.sitemap.resources.items.map((item, i, arr) => (
                          <div key={i} className="flex items-center">
                            <div className="flex items-center pl-3 relative flex-1">
                              <span className={`absolute left-3 top-[-10px] w-[1.5px] bg-[#E3DAAE] ${i === arr.length - 1 ? 'h-[calc(50%+10px)]' : 'bottom-0'}`} />
                              <span className="w-2.5 h-[1.5px] bg-[#E3DAAE] shrink-0" />
                              <div className="flex-1 bg-[#FFFFFF] rounded-[8px] border border-[#E3DAAE]/70 py-3 px-2.5 min-h-[44px] flex items-center justify-center text-center text-[12px] font-['Inter'] text-[#5C6454] leading-snug shadow-xs">
                                {item}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Branch 3: Company */}
                    <div className="flex flex-col">
                      <div className="w-full bg-[#E3DAAE]/30 border border-[#E3DAAE] rounded-[8px] py-3.5 px-2 min-h-[46px] flex items-center justify-center text-center mb-3">
                        <span className="font-['Inter'] font-semibold text-[13px] sm:text-[14px] text-[#363C30]">{content.research.sitemap.company.title}</span>
                      </div>
                      <div className="flex flex-col gap-2.5">
                        {content.research.sitemap.company.items.map((item, i, arr) => (
                          <div key={i} className="flex items-center">
                            <div className="flex items-center pl-3 relative flex-1">
                              <span className={`absolute left-3 top-[-10px] w-[1.5px] bg-[#E3DAAE] ${i === arr.length - 1 ? 'h-[calc(50%+10px)]' : 'bottom-0'}`} />
                              <span className="w-2.5 h-[1.5px] bg-[#E3DAAE] shrink-0" />
                              <div className="flex-1 bg-[#FFFFFF] rounded-[8px] border border-[#E3DAAE]/70 py-3 px-2.5 min-h-[44px] flex items-center justify-center text-center text-[12px] font-['Inter'] text-[#5C6454] leading-snug shadow-xs">
                                {item}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Branch 4: Partners */}
                    <div className="flex flex-col">
                      <div className="w-full bg-[#E3DAAE]/30 border border-[#E3DAAE] rounded-[8px] py-3.5 px-2 min-h-[46px] flex items-center justify-center text-center mb-3">
                        <span className="font-['Inter'] font-semibold text-[13px] sm:text-[14px] text-[#363C30]">{content.research.sitemap.partners.title}</span>
                      </div>
                      <div className="flex flex-col gap-2.5">
                        {content.research.sitemap.partners.items.map((item, i, arr) => (
                          <div key={i} className="flex items-center">
                            <div className="flex items-center pl-3 relative flex-1">
                              <span className={`absolute left-3 top-[-10px] w-[1.5px] bg-[#E3DAAE] ${i === arr.length - 1 ? 'h-[calc(50%+10px)]' : 'bottom-0'}`} />
                              <span className="w-2.5 h-[1.5px] bg-[#E3DAAE] shrink-0" />
                              <div className="flex-1 bg-[#FFFFFF] rounded-[8px] border border-[#E3DAAE]/70 py-3 px-2.5 min-h-[44px] flex items-center justify-center text-center text-[12px] font-['Inter'] text-[#5C6454] leading-snug shadow-xs">
                                {item}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Branch 5: Legal */}
                    <div className="flex flex-col">
                      <div className="w-full bg-[#E3DAAE]/30 border border-[#E3DAAE] rounded-[8px] py-3.5 px-2 min-h-[46px] flex items-center justify-center text-center mb-3">
                        <span className="font-['Inter'] font-semibold text-[13px] sm:text-[14px] text-[#363C30]">{content.research.sitemap.legal.title}</span>
                      </div>
                      <div className="flex flex-col gap-2.5">
                        {content.research.sitemap.legal.items.map((item, i, arr) => (
                          <div key={i} className="flex items-center">
                            <div className="flex items-center pl-3 relative flex-1">
                              <span className={`absolute left-3 top-[-10px] w-[1.5px] bg-[#E3DAAE] ${i === arr.length - 1 ? 'h-[calc(50%+10px)]' : 'bottom-0'}`} />
                              <span className="w-2.5 h-[1.5px] bg-[#E3DAAE] shrink-0" />
                              <div className="flex-1 bg-[#FFFFFF] rounded-[8px] border border-[#E3DAAE]/70 py-3 px-2.5 min-h-[44px] flex items-center justify-center text-center text-[12px] font-['Inter'] text-[#5C6454] leading-snug shadow-xs">
                                {item}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              <blockquote className="border-l-4 border-[#363C30] pl-4 italic text-[17px] text-[#363C30] font-medium">
                {content.research.quote}
              </blockquote>
            </div>
          </section>

          {/* ========================================================= */}
          {/* SECTION 6: DESIGN SYSTEM                                  */}
          {/* ========================================================= */}
          <section id="design-system" className="scroll-mt-28 pt-8">
            <h2 className="font-['Inter'] font-medium text-[28px] sm:text-[32px] text-[#363C30] mb-4">
              {content.designSystem.title}
            </h2>

            <p className="font-['Inter'] text-[16px] leading-[26px] text-[#5C6454] mb-4">
              {content.designSystem.description}
            </p>

            <ul className="list-disc pl-5 space-y-2 font-['Inter'] text-[16px] leading-[26px] text-[#5C6454] mb-6">
              <li>
                <strong className="text-[#363C30] font-medium">{content.designSystem.typographyTitle}</strong> {content.designSystem.typographyDesc}
              </li>
              <li>
                <strong className="text-[#363C30] font-medium">{content.designSystem.colorTitle}</strong> {content.designSystem.colorDesc}
              </li>
            </ul>

            {/* VISUAL: CloudPanel Design System */}
            <div className="my-6 w-full rounded-[24px] bg-[#CE9199] py-8 sm:py-12 px-6 sm:px-12 flex items-center justify-center">
              <div className="w-full max-w-[860px] rounded-[16px] sm:rounded-[20px] overflow-hidden shadow-lg bg-white">
                <img
                  src={cloudpanelDesignSystem}
                  alt="CloudPanel Design System - Typography scale and brand color palette tokens"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </section>

          {/* ========================================================= */}
          {/* SECTION 7: THE FINAL EXPERIENCE                           */}
          {/* ========================================================= */}
          <section id="final-experience" className="scroll-mt-28 pt-8">
            <h2 className="font-['Inter'] font-medium text-[28px] sm:text-[32px] text-[#363C30] mb-4">
              {content.finalExperience.title}
            </h2>

            {/* Tablet Mockup Video Showcase */}
            <div className="my-6 w-full rounded-[24px] bg-[#CE9199] py-8 sm:py-12 px-6 sm:px-12 flex items-center justify-center">
              {/* Tablet Frame with Thin Black Rounded Border */}
              <div className="w-full max-w-[740px] rounded-[16px] sm:rounded-[20px] border-[2.5px] sm:border-[3px] border-[#000000] p-[2.5px] bg-[#000000] overflow-hidden">
                {/* Screen Content Wrapper */}
                <div className="relative w-full rounded-[11px] sm:rounded-[15px] overflow-hidden bg-black aspect-[16/10] sm:aspect-[16/9]">
                  <video
                    src={cloudpanelVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>

            {/* Final Product Screens Showcase */}
            <div className="my-6 w-full rounded-[18px] sm:rounded-[24px] overflow-hidden border border-[#E3DAAE]/60 shadow-[0_4px_20px_rgba(54,60,48,0.04)]">
              <img
                src={cloudpanelAllScreens}
                alt="CloudPanel Redesigned Screens Overview"
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="mt-8 space-y-4">
              <h3 className="font-['Inter'] font-medium text-[22px] text-[#363C30]">
                {content.finalExperience.mobileTitle}
              </h3>

              {/* Mobile Phone Mockup Video Showcase */}
              <div className="my-6 w-full rounded-[24px] bg-[#CE9199] py-8 sm:py-12 px-6 sm:px-12 flex items-center justify-center">
                {/* Phone Frame with Thin Black Rounded Border matching Tablet */}
                <div className="w-full max-w-[280px] sm:max-w-[300px] rounded-[24px] sm:rounded-[28px] border-[2.5px] sm:border-[3px] border-[#000000] p-[2.5px] bg-[#000000] overflow-hidden">
                  {/* Screen Content Wrapper */}
                  <div className="relative w-full rounded-[19px] sm:rounded-[23px] overflow-hidden bg-black aspect-[9/19.5]">
                    <video
                      src={cloudpanelMobileVideo}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
              </div>

              <p className="font-['Inter'] text-[16px] leading-[26px] text-[#5C6454]">
                {content.finalExperience.mobileDesc}
              </p>
            </div>
          </section>

          {/* ========================================================= */}
          {/* SECTION 9: THE RESULT & LEARNINGS                        */}
          {/* ========================================================= */}
          <section id="results" className="scroll-mt-28 pt-8">
            <h2 className="font-['Inter'] font-medium text-[28px] sm:text-[32px] text-[#363C30] mb-6">
              {content.reflections.title}
            </h2>

            {/* Combined Results & Takeaways Card with Dashed Border */}
            <div className="border-2 border-dashed border-[#E3DAAE] rounded-[24px] overflow-hidden bg-transparent">
              {/* Top Metrics Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-dashed divide-[#E3DAAE]">
                {content.reflections.metrics.map((metric, idx) => (
                  <div key={idx} className="p-6 sm:p-7 flex flex-col justify-between">
                    <span className="font-['Inter'] text-[15px] sm:text-[16px] text-[#5C6454] mb-3">
                      {metric.label}
                    </span>
                    <span className="font-['Inter'] font-bold text-[36px] sm:text-[42px] text-[#363C30] leading-none">
                      {metric.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Bottom Learnings / Takeaways Bulleted List */}
              <div className="border-t-2 border-dashed border-[#E3DAAE] p-6 sm:p-8">
                <ul className="space-y-4 font-['Inter'] text-[15px] sm:text-[16px] leading-[26px] text-[#5C6454]">
                  {content.reflections.takeaways.map((takeaway, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-[#363C30] mt-1.5 select-none leading-none text-[18px]">•</span>
                      <span>
                        {takeaway.bold && (
                          <strong className="text-[#363C30] font-semibold">{takeaway.bold} </strong>
                        )}
                        {takeaway.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* ========================================================= */}
          {/* SECTION 10: NEXT PROJECT                                  */}
          {/* ========================================================= */}
          <section className="pt-6">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-['Inter'] font-medium text-[28px] sm:text-[32px] text-[#363C30]">
                {content.footer.moreProjects}
              </h2>
              <button 
                onClick={() => window.location.hash = '#/projects'}
                className="px-5 py-2.5 rounded-[8px] bg-[#363C30] text-white font-medium text-[14px] hover:opacity-90 transition-opacity cursor-pointer shadow-sm"
              >
                {content.footer.viewAll}
              </button>
            </div>
            <div className="-mx-2 sm:mx-0">
              <ProjectGrid onSelectProject={onSelectProject} excludeId="cloudpanel" limit={2} />
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
};
