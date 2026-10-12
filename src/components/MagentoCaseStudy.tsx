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
import { magentoContent } from '../locales/caseStudies/magento';
import mgtVisual1 from '../assets/mgt-commmerce-visual-1.png';
import mgtVisual2 from '../assets/mgt-commmerce-visual-2.png';
import mgtVisual3 from '../assets/mgt-commmerce-visual-3.png';
import mgtStylesheet from '../assets/mgt-commerce-stylesheet.webp';
import mgtIterations from '../assets/mgt-commerce-iterations.png';
import mgtCommerceOld from '../assets/mgt-commerce-old.png';
import mgtPricing from '../assets/mgt-commerce-pricing.png';

interface MagentoCaseStudyProps {
  onBack: () => void;
  onSelectProject?: (id: string) => void;
}


export const MagentoCaseStudy: React.FC<MagentoCaseStudyProps> = ({ onBack, onSelectProject }) => {
  const { t, language } = useLanguage();
  const content = magentoContent[language];
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
    { id: 'impact', label: content.nav.results },
    { id: 'challenge', label: content.nav.challenge },
    { id: 'objectives', label: content.nav.objectives },
    { id: 'research', label: content.nav.research },
    { id: 'structure', label: content.nav.structure },
    { id: 'interface', label: content.nav.interface },
    { id: 'collaboration', label: content.nav.collaboration },
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
                href="https://www.mgt-commerce.com"
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
            <h2 className="font-['Inter'] font-medium text-[28px] sm:text-[32px] text-[#363C30] mb-4">
              {content.introduction.title}
            </h2>

            <p className="font-['Inter'] text-[16px] leading-[26px] text-[#5C6454] mb-4">
              {content.introduction.p1}
            </p>

            <p className="font-['Inter'] text-[16px] leading-[26px] text-[#5C6454] mb-6">
              {content.introduction.p2}
            </p>

            {/* Final Website Overview Image 1 */}
            <div className="my-6 w-full rounded-[18px] sm:rounded-[24px] overflow-hidden border border-[#E3DAAE]/60 shadow-[0_4px_20px_rgba(54,60,48,0.04)]">
              <img
                src={mgtVisual1}
                alt="MGT-Commerce Final Website Overview 1"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Final Website Overview Image 2 */}
            <div className="my-6 w-full rounded-[18px] sm:rounded-[24px] overflow-hidden border border-[#E3DAAE]/60 shadow-[0_4px_20px_rgba(54,60,48,0.04)]">
              <img
                src={mgtVisual2}
                alt="MGT-Commerce Final Website Overview 2"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Final Website Overview Image 3 */}
            <div className="my-6 w-full rounded-[18px] sm:rounded-[24px] overflow-hidden border border-[#E3DAAE]/60 shadow-[0_4px_20px_rgba(54,60,48,0.04)]">
              <img
                src={mgtVisual3}
                alt="MGT-Commerce Final Website Overview 3"
                className="w-full h-auto object-cover"
              />
            </div>
          </section>

          {/* ========================================================= */}
          {/* SECTION 2: RESULTS                                        */}
          {/* ========================================================= */}
          <section id="impact" className="scroll-mt-28 pt-8">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-12 mb-8">
              <h2 className="font-['Inter'] font-medium text-[32px] sm:text-[38px] text-[#363C30] tracking-tight shrink-0">
                {content.results.title}
              </h2>
              <p className="font-['Inter'] text-[15px] sm:text-[16px] leading-[26px] text-[#5C6454] max-w-xl">
                {content.results.subtitle}
              </p>
            </div>

            {/* 3 Metrics Cards with Dashed Border */}
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
          </section>

          {/* ========================================================= */}
          {/* SECTION 3: THE CHALLENGE                                  */}
          {/* ========================================================= */}
          <section id="challenge" className="scroll-mt-28 pt-8">
            <h2 className="font-['Inter'] font-medium text-[28px] sm:text-[32px] text-[#363C30] mb-2">
              {content.challenge.title}
            </h2>

            <h3 className="font-['Inter'] font-medium text-[20px] sm:text-[22px] text-[#363C30] mb-4">
              {content.challenge.subtitle}
            </h3>

            <p className="font-['Inter'] text-[16px] leading-[26px] text-[#5C6454] mb-4">
              {content.challenge.p1}
            </p>

            <ul className="list-disc list-inside space-y-2 font-['Inter'] font-medium text-[16px] text-[#363C30] pl-2 mb-6">
              {content.challenge.bullets.map((b, idx) => (
                <li key={idx}>{b}</li>
              ))}
            </ul>

            <p className="font-['Inter'] text-[16px] leading-[26px] text-[#5C6454] mb-6">
              {content.challenge.p2}
            </p>

            {/* Old Website Overview Image */}
            <div className="my-6 w-full rounded-[18px] sm:rounded-[24px] overflow-hidden border border-[#E3DAAE]/60 shadow-[0_4px_20px_rgba(54,60,48,0.04)]">
              <img
                src={mgtCommerceOld}
                alt="MGT-Commerce Old Website"
                className="w-full h-auto object-cover"
              />
            </div>

            <p className="font-['Inter'] text-[16px] leading-[26px] text-[#5C6454] mb-3">
              {content.challenge.caption}
            </p>

            <blockquote className="border-l-4 border-[#363C30] pl-4 my-6 italic text-[17px] sm:text-[18px] text-[#363C30] font-medium">
              {content.challenge.quote}
            </blockquote>
          </section>

          {/* ========================================================= */}
          {/* SECTION 4: OBJECTIVES & NEEDS                             */}
          {/* ========================================================= */}
          <section id="objectives" className="scroll-mt-28 pt-8">
            <h2 className="font-['Inter'] font-medium text-[28px] sm:text-[32px] text-[#363C30] mb-4">
              {content.objectives.title}
            </h2>

            <p className="font-['Inter'] text-[16px] leading-[26px] text-[#5C6454] mb-8">
              {content.objectives.intro}
            </p>

            {/* Split Objectives & Needs Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Business Objectives */}
              <div className="border-2 border-dashed border-[#E3DAAE] rounded-[20px] p-6 sm:p-7">
                <h3 className="font-['Inter'] font-semibold text-[20px] text-[#363C30] mb-5">
                  {content.objectives.businessTitle}
                </h3>
                <div className="space-y-4">
                  {content.objectives.businessPoints.map((pt, idx) => (
                    <div key={idx}>
                      <span className="font-['Inter'] font-semibold text-[15px] text-[#363C30] block mb-1">
                        {pt.title}
                      </span>
                      <p className="font-['Inter'] text-[14px] leading-[22px] text-[#5C6454]">
                        {pt.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* User Needs */}
              <div className="border-2 border-dashed border-[#E3DAAE] rounded-[20px] p-6 sm:p-7">
                <h3 className="font-['Inter'] font-semibold text-[20px] text-[#363C30] mb-5">
                  {content.objectives.userTitle}
                </h3>
                <div className="space-y-4">
                  {content.objectives.userPoints.map((pt, idx) => (
                    <div key={idx}>
                      <span className="font-['Inter'] font-semibold text-[15px] text-[#363C30] block mb-1">
                        {pt.title}
                      </span>
                      <p className="font-['Inter'] text-[14px] leading-[22px] text-[#5C6454]">
                        {pt.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </section>

          {/* ========================================================= */}
          {/* SECTION 5: RESEARCH & INSIGHTS                            */}
          {/* ========================================================= */}
          <section id="research" className="scroll-mt-28 pt-8">
            <h2 className="font-['Inter'] font-medium text-[28px] sm:text-[32px] text-[#363C30] mb-2">
              {content.research.title}
            </h2>

            <h3 className="font-['Inter'] font-medium text-[20px] sm:text-[22px] text-[#363C30] mb-4">
              {content.research.subtitle}
            </h3>

            <p className="font-['Inter'] text-[16px] leading-[26px] text-[#5C6454] mb-6">
              {content.research.intro}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {content.research.methods.map((method, idx) => (
                <div key={idx} className="border border-[#E3DAAE]/60 bg-[#FAF8EC] rounded-[14px] p-5">
                  <span className="font-['Inter'] font-semibold text-[16px] text-[#363C30] block mb-2">
                    {method.title}
                  </span>
                  <p className="font-['Inter'] text-[14px] leading-[22px] text-[#5C6454]">
                    {method.desc}
                  </p>
                </div>
              ))}
            </div>


            <div className="mt-12 space-y-4">
              <h3 className="font-['Inter'] font-medium text-[24px] sm:text-[26px] text-[#363C30]">
                {content.research.revealedTitle}
              </h3>

              <h4 className="font-['Inter'] font-medium text-[18px] sm:text-[20px] text-[#363C30]">
                {content.research.revealedSubtitle}
              </h4>

              <p className="font-['Inter'] text-[16px] leading-[26px] text-[#5C6454] mb-4">
                {content.research.revealedIntro}
              </p>

              <div className="space-y-4">
                {content.research.findings.map((f, idx) => (
                  <div key={idx} className="border-l-2 border-[#E3DAAE] pl-4">
                    <span className="font-['Inter'] font-semibold text-[15px] text-[#363C30] block">
                      {f.title}
                    </span>
                    <p className="font-['Inter'] text-[14px] leading-[22px] text-[#5C6454]">
                      {f.desc}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </section>

          {/* ========================================================= */}
          {/* SECTION 6: ARCHITECTURE & JOURNEY                         */}
          {/* ========================================================= */}
          <section id="structure" className="scroll-mt-28 pt-8">
            <h2 className="font-['Inter'] font-medium text-[28px] sm:text-[32px] text-[#363C30] mb-2">
              {content.structure.title}
            </h2>

            <h3 className="font-['Inter'] font-medium text-[20px] sm:text-[22px] text-[#363C30] mb-4">
              {content.structure.subtitle}
            </h3>

            <p className="font-['Inter'] text-[16px] leading-[26px] text-[#5C6454] mb-4">
              {content.structure.p1}
            </p>

            <p className="font-['Inter'] text-[16px] leading-[26px] text-[#5C6454] mb-4">
              {content.structure.p2}
            </p>

            <div className="my-4 py-3 px-4 bg-[#FAF8EC] border border-[#E3DAAE]/70 rounded-[10px] text-center font-['Inter'] font-semibold text-[14px] sm:text-[15px] text-[#363C30]">
              {content.structure.ribbon}
            </div>

            {/* VISUAL 06: MGT-COMMERCE SITEMAP TREE DIAGRAM */}
            <div className="my-6 w-full rounded-[20px] sm:rounded-[24px] bg-[#FAF8EC] border-2 border-dashed border-[#E3DAAE] p-4 sm:p-6 lg:p-8">
              <div className="w-full flex flex-col items-center">
                
                {/* Root Node: Homepage */}
                <div className="relative z-10 bg-[#FFFFFF] border border-[#E3DAAE] rounded-[10px] px-8 sm:px-12 py-3 min-h-[46px] flex items-center justify-center shadow-[0_2px_8px_rgba(54,60,48,0.04)] text-center">
                  <span className="font-['Inter'] font-bold text-[15px] sm:text-[16px] text-[#363C30]">
                    {content.structure.sitemap.homepage}
                  </span>
                </div>

                {/* SVG Connector from Root to 9 Category Headers */}
                <div className="w-full h-8 sm:h-10 -my-0.5 pointer-events-none">
                  <svg className="w-full h-full" viewBox="0 0 900 40" fill="none" preserveAspectRatio="none">
                    {/* Vertical line coming down from Homepage center */}
                    <line x1="450" y1="0" x2="450" y2="20" stroke="#E3DAAE" strokeWidth="1.5" />
                    {/* Horizontal bus line connecting 9 columns */}
                    <line x1="50" y1="20" x2="850" y2="20" stroke="#E3DAAE" strokeWidth="1.5" />
                    {/* 9 Drop-down stems */}
                    <line x1="50" y1="20" x2="50" y2="40" stroke="#E3DAAE" strokeWidth="1.5" />
                    <line x1="150" y1="20" x2="150" y2="40" stroke="#E3DAAE" strokeWidth="1.5" />
                    <line x1="250" y1="20" x2="250" y2="40" stroke="#E3DAAE" strokeWidth="1.5" />
                    <line x1="350" y1="20" x2="350" y2="40" stroke="#E3DAAE" strokeWidth="1.5" />
                    <line x1="450" y1="20" x2="450" y2="40" stroke="#E3DAAE" strokeWidth="1.5" />
                    <line x1="550" y1="20" x2="550" y2="40" stroke="#E3DAAE" strokeWidth="1.5" />
                    <line x1="650" y1="20" x2="650" y2="40" stroke="#E3DAAE" strokeWidth="1.5" />
                    <line x1="750" y1="20" x2="750" y2="40" stroke="#E3DAAE" strokeWidth="1.5" />
                    <line x1="850" y1="20" x2="850" y2="40" stroke="#E3DAAE" strokeWidth="1.5" />
                  </svg>
                </div>

                {/* 9 Columns Grid Layout - Fits full width cleanly */}
                <div className="w-full grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-2 sm:gap-2.5">
                  
                  {/* Column 1: Magento Hosting */}
                  <div className="flex flex-col">
                    <div className="w-full bg-[#F2ECD9] border border-[#E3DAAE] rounded-[7px] py-2 px-1 min-h-[44px] flex items-center justify-center text-center mb-2">
                      <span className="font-['Inter'] font-semibold text-[11px] sm:text-[12px] text-[#363C30] leading-tight">{content.structure.sitemap.categories.hosting}</span>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      {['Single Server', 'Multi Server', 'AutoScaling'].map((item, i, arr) => (
                        <div key={i} className="flex items-center">
                          <div className="flex items-center pl-1.5 relative flex-1">
                            <span className={`absolute left-1.5 top-[-6px] w-[1.5px] bg-[#E3DAAE] ${i === arr.length - 1 ? 'h-[calc(50%+6px)]' : 'bottom-0'}`} />
                            <span className="w-1.5 h-[1.5px] bg-[#E3DAAE] shrink-0" />
                            <div className="flex-1 bg-[#FFFFFF] rounded-[6px] border border-[#E3DAAE]/70 py-1.5 px-1 min-h-[34px] flex items-center justify-center text-center text-[10px] sm:text-[11px] font-['Inter'] text-[#5C6454] leading-tight shadow-xs">
                              {item}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Column 2: Features */}
                  <div className="flex flex-col">
                    <div className="w-full bg-[#F2ECD9] border border-[#E3DAAE] rounded-[7px] py-2 px-1 min-h-[44px] flex items-center justify-center text-center mb-2">
                      <span className="font-['Inter'] font-semibold text-[11px] sm:text-[12px] text-[#363C30] leading-tight">{content.structure.sitemap.categories.features}</span>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      {['Performance', 'Security'].map((item, i, arr) => (
                        <div key={i} className="flex items-center">
                          <div className="flex items-center pl-1.5 relative flex-1">
                            <span className={`absolute left-1.5 top-[-6px] w-[1.5px] bg-[#E3DAAE] ${i === arr.length - 1 ? 'h-[calc(50%+6px)]' : 'bottom-0'}`} />
                            <span className="w-1.5 h-[1.5px] bg-[#E3DAAE] shrink-0" />
                            <div className="flex-1 bg-[#FFFFFF] rounded-[6px] border border-[#E3DAAE]/70 py-1.5 px-1 min-h-[34px] flex items-center justify-center text-center text-[10px] sm:text-[11px] font-['Inter'] text-[#5C6454] leading-tight shadow-xs">
                              {item}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Column 3: Tools */}
                  <div className="flex flex-col">
                    <div className="w-full bg-[#F2ECD9] border border-[#E3DAAE] rounded-[7px] py-2 px-1 min-h-[44px] flex items-center justify-center text-center mb-2">
                      <span className="font-['Inter'] font-semibold text-[11px] sm:text-[12px] text-[#363C30] leading-tight">{content.structure.sitemap.categories.tools}</span>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      {['MGT Developer Toolbar', 'MGT Dev Environment'].map((item, i, arr) => (
                        <div key={i} className="flex items-center">
                          <div className="flex items-center pl-1.5 relative flex-1">
                            <span className={`absolute left-1.5 top-[-6px] w-[1.5px] bg-[#E3DAAE] ${i === arr.length - 1 ? 'h-[calc(50%+6px)]' : 'bottom-0'}`} />
                            <span className="w-1.5 h-[1.5px] bg-[#E3DAAE] shrink-0" />
                            <div className="flex-1 bg-[#FFFFFF] rounded-[6px] border border-[#E3DAAE]/70 py-1.5 px-1 min-h-[34px] flex items-center justify-center text-center text-[10px] sm:text-[11px] font-['Inter'] text-[#5C6454] leading-tight shadow-xs">
                              {item}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Column 4: Add-On's */}
                  <div className="flex flex-col">
                    <div className="w-full bg-[#F2ECD9] border border-[#E3DAAE] rounded-[7px] py-2 px-1 min-h-[44px] flex items-center justify-center text-center mb-2">
                      <span className="font-['Inter'] font-semibold text-[11px] sm:text-[12px] text-[#363C30] leading-tight">{content.structure.sitemap.categories.addons}</span>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      {['MGT WAF', 'MGT Cloud Log', 'MGT Code Deploy'].map((item, i, arr) => (
                        <div key={i} className="flex items-center">
                          <div className="flex items-center pl-1.5 relative flex-1">
                            <span className={`absolute left-1.5 top-[-6px] w-[1.5px] bg-[#E3DAAE] ${i === arr.length - 1 ? 'h-[calc(50%+6px)]' : 'bottom-0'}`} />
                            <span className="w-1.5 h-[1.5px] bg-[#E3DAAE] shrink-0" />
                            <div className="flex-1 bg-[#FFFFFF] rounded-[6px] border border-[#E3DAAE]/70 py-1.5 px-1 min-h-[34px] flex items-center justify-center text-center text-[10px] sm:text-[11px] font-['Inter'] text-[#5C6454] leading-tight shadow-xs">
                              {item}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Column 5: Resources */}
                  <div className="flex flex-col">
                    <div className="w-full bg-[#F2ECD9] border border-[#E3DAAE] rounded-[7px] py-2 px-1 min-h-[44px] flex items-center justify-center text-center mb-2">
                      <span className="font-['Inter'] font-semibold text-[11px] sm:text-[12px] text-[#363C30] leading-tight">{content.structure.sitemap.categories.resources}</span>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      {['Blog', 'Tutorials', 'Docs', 'Migration', 'Cost Estimator'].map((item, i, arr) => (
                        <div key={i} className="flex items-center">
                          <div className="flex items-center pl-1.5 relative flex-1">
                            <span className={`absolute left-1.5 top-[-6px] w-[1.5px] bg-[#E3DAAE] ${i === arr.length - 1 ? 'h-[calc(50%+6px)]' : 'bottom-0'}`} />
                            <span className="w-1.5 h-[1.5px] bg-[#E3DAAE] shrink-0" />
                            <div className="flex-1 bg-[#FFFFFF] rounded-[6px] border border-[#E3DAAE]/70 py-1.5 px-1 min-h-[34px] flex items-center justify-center text-center text-[10px] sm:text-[11px] font-['Inter'] text-[#5C6454] leading-tight shadow-xs">
                              {item}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Column 6: Managed AWS */}
                  <div className="flex flex-col">
                    <div className="w-full bg-[#F2ECD9] border border-[#E3DAAE] rounded-[7px] py-2 px-1 min-h-[44px] flex items-center justify-center text-center mb-2">
                      <span className="font-['Inter'] font-semibold text-[11px] sm:text-[12px] text-[#363C30] leading-tight">{content.structure.sitemap.categories.aws}</span>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      {[
                        'Load Balancer',
                        'CloudFront',
                        'Auto Scaling',
                        'Graviton',
                        'RDS',
                        'Shield',
                        'WAF'
                      ].map((item, i, arr) => (
                        <div key={i} className="flex items-center">
                          <div className="flex items-center pl-1.5 relative flex-1">
                            <span className={`absolute left-1.5 top-[-6px] w-[1.5px] bg-[#E3DAAE] ${i === arr.length - 1 ? 'h-[calc(50%+6px)]' : 'bottom-0'}`} />
                            <span className="w-1.5 h-[1.5px] bg-[#E3DAAE] shrink-0" />
                            <div className="flex-1 bg-[#FFFFFF] rounded-[6px] border border-[#E3DAAE]/70 py-1.5 px-1 min-h-[34px] flex items-center justify-center text-center text-[10px] sm:text-[11px] font-['Inter'] text-[#5C6454] leading-tight shadow-xs">
                              {item}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Column 7: Additional Services */}
                  <div className="flex flex-col">
                    <div className="w-full bg-[#F2ECD9] border border-[#E3DAAE] rounded-[7px] py-2 px-1 min-h-[44px] flex items-center justify-center text-center mb-2">
                      <span className="font-['Inter'] font-semibold text-[11px] sm:text-[12px] text-[#363C30] leading-tight">{content.structure.sitemap.categories.additional}</span>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      {['Admin Server', 'Test Server'].map((item, i, arr) => (
                        <div key={i} className="flex items-center">
                          <div className="flex items-center pl-1.5 relative flex-1">
                            <span className={`absolute left-1.5 top-[-6px] w-[1.5px] bg-[#E3DAAE] ${i === arr.length - 1 ? 'h-[calc(50%+6px)]' : 'bottom-0'}`} />
                            <span className="w-1.5 h-[1.5px] bg-[#E3DAAE] shrink-0" />
                            <div className="flex-1 bg-[#FFFFFF] rounded-[6px] border border-[#E3DAAE]/70 py-1.5 px-1 min-h-[34px] flex items-center justify-center text-center text-[10px] sm:text-[11px] font-['Inter'] text-[#5C6454] leading-tight shadow-xs">
                              {item}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Column 8: Technologies */}
                  <div className="flex flex-col">
                    <div className="w-full bg-[#F2ECD9] border border-[#E3DAAE] rounded-[7px] py-2 px-1 min-h-[44px] flex items-center justify-center text-center mb-2">
                      <span className="font-['Inter'] font-semibold text-[11px] sm:text-[12px] text-[#363C30] leading-tight">{content.structure.sitemap.categories.tech}</span>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      {[
                        'Debian',
                        'NGINX',
                        'PHP',
                        'Varnish',
                        'Redis',
                        'MySQL',
                        'Elasticsearch',
                        'RabbitMQ',
                        'NFS',
                        'Control Panel'
                      ].map((item, i, arr) => (
                        <div key={i} className="flex items-center">
                          <div className="flex items-center pl-1.5 relative flex-1">
                            <span className={`absolute left-1.5 top-[-6px] w-[1.5px] bg-[#E3DAAE] ${i === arr.length - 1 ? 'h-[calc(50%+6px)]' : 'bottom-0'}`} />
                            <span className="w-1.5 h-[1.5px] bg-[#E3DAAE] shrink-0" />
                            <div className="flex-1 bg-[#FFFFFF] rounded-[6px] border border-[#E3DAAE]/70 py-1.5 px-1 min-h-[34px] flex items-center justify-center text-center text-[10px] sm:text-[11px] font-['Inter'] text-[#5C6454] leading-tight shadow-xs">
                              {item}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Column 9: CMS */}
                  <div className="flex flex-col">
                    <div className="w-full bg-[#F2ECD9] border border-[#E3DAAE] rounded-[7px] py-2 px-1 min-h-[44px] flex items-center justify-center text-center mb-2">
                      <span className="font-['Inter'] font-semibold text-[11px] sm:text-[12px] text-[#363C30] leading-tight">{content.structure.sitemap.categories.cms}</span>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      {[
                        'Imprint',
                        'GDPR',
                        'Terms',
                        'Privacy',
                        'SLA',
                        'Partners',
                        'About',
                        'Contact',
                        'Demo',
                        'Login'
                      ].map((item, i, arr) => (
                        <div key={i} className="flex items-center">
                          <div className="flex items-center pl-1.5 relative flex-1">
                            <span className={`absolute left-1.5 top-[-6px] w-[1.5px] bg-[#E3DAAE] ${i === arr.length - 1 ? 'h-[calc(50%+6px)]' : 'bottom-0'}`} />
                            <span className="w-1.5 h-[1.5px] bg-[#E3DAAE] shrink-0" />
                            <div className="flex-1 bg-[#FFFFFF] rounded-[6px] border border-[#E3DAAE]/70 py-1.5 px-1 min-h-[34px] flex items-center justify-center text-center text-[10px] sm:text-[11px] font-['Inter'] text-[#5C6454] leading-tight shadow-xs">
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

            <div className="mt-12 space-y-4">
              <h3 className="font-['Inter'] font-medium text-[24px] sm:text-[26px] text-[#363C30]">
                {content.structure.journeyTitle}
              </h3>

              <p className="font-['Inter'] text-[16px] leading-[26px] text-[#5C6454] mb-6">
                {content.structure.journeyIntro}
              </p>

              {/* Minimal User Journey Diagram */}
              <div className="my-8 w-full rounded-[20px] sm:rounded-[24px] bg-[#FAF8EC] border-2 border-dashed border-[#E3DAAE] p-6 sm:p-8">
                {/* 5-Step Horizontal Sequence */}
                <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 lg:gap-3.5 relative">
                  {content.structure.journeySteps.map((item, idx, arr) => (
                    <div
                      key={idx}
                      className="bg-[#FFFFFF] rounded-[14px] border border-[#E3DAAE]/80 p-4 sm:p-4.5 flex flex-col justify-between min-h-[130px] relative shadow-[0_2px_8px_rgba(54,60,48,0.02)]"
                    >
                      {/* Step Number & Connector indicator */}
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-['Inter'] font-semibold text-[12px] text-[#5C6454]/70">
                          {item.step}
                        </span>
                        {idx < arr.length - 1 && (
                          <span className="hidden sm:inline-block text-[#E3DAAE] text-[13px] font-medium select-none">
                            →
                          </span>
                        )}
                      </div>

                      {/* Step Title & Question */}
                      <div>
                        <h4 className="font-['Inter'] font-semibold text-[15px] sm:text-[16px] text-[#363C30] mb-1.5">
                          {item.title}
                        </h4>
                        <p className="font-['Inter'] text-[12px] sm:text-[13px] leading-[18px] text-[#5C6454]">
                          {item.question}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ========================================================= */}
          {/* SECTION 7: INTERFACE DECISIONS                            */}
          {/* ========================================================= */}
          <section id="interface" className="scroll-mt-28 pt-8">
            <h2 className="font-['Inter'] font-medium text-[28px] sm:text-[32px] text-[#363C30] mb-2">
              {content.interface.title}
            </h2>

            <h3 className="font-['Inter'] font-medium text-[20px] sm:text-[22px] text-[#363C30] mb-4">
              {content.interface.subtitle}
            </h3>

            <p className="font-['Inter'] text-[16px] leading-[26px] text-[#5C6454] mb-6">
              {content.interface.p1}
            </p>

            {/* Wireframe Iterations Image */}
            <div className="my-6 w-full rounded-[18px] sm:rounded-[24px] overflow-hidden border border-[#E3DAAE]/60 shadow-[0_4px_20px_rgba(54,60,48,0.04)]">
              <img
                src={mgtIterations}
                alt="MGT-Commerce Wireframe & Layout Iterations"
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="mt-12 space-y-4">
              <h3 className="font-['Inter'] font-medium text-[24px] sm:text-[26px] text-[#363C30]">
                {content.interface.pricingTitle}
              </h3>

              <h4 className="font-['Inter'] font-medium text-[18px] sm:text-[20px] text-[#363C30]">
                {content.interface.pricingSubtitle}
              </h4>

              <p className="font-['Inter'] text-[16px] leading-[26px] text-[#5C6454] mb-4">
                {content.interface.pricingIntro}
              </p>

              <ul className="list-disc list-inside space-y-1.5 font-['Inter'] text-[15px] text-[#363C30] pl-2 mb-4">
                {content.interface.pricingBullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>

              {/* Pricing Before / After Image */}
              <div className="my-6 w-full rounded-[18px] sm:rounded-[24px] overflow-hidden border border-[#E3DAAE]/60 shadow-[0_4px_20px_rgba(54,60,48,0.04)]">
                <img
                  src={mgtPricing}
                  alt="MGT-Commerce Pricing Before and After"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Caption */}
              <div className="flex items-center gap-3 -mt-3 mb-6">
                <span className="w-6 h-[1px] bg-[#E3DAAE]" />
                <p className="font-['Inter'] text-[12px] sm:text-[13px] italic text-[#5C6454]/70">
                  {content.interface.pricingCaption}
                </p>
              </div>
            </div>


            <div className="mt-12 space-y-4">
              <h3 className="font-['Inter'] font-medium text-[24px] sm:text-[26px] text-[#363C30]">
                {content.interface.visualTitle}
              </h3>

              <p className="font-['Inter'] text-[16px] leading-[26px] text-[#5C6454] mb-4">
                {content.interface.visualDesc}
              </p>

              {/* Design System Stylesheet Image */}
              <div className="my-6 w-full rounded-[24px] bg-[#CE9199] py-8 sm:py-12 px-6 sm:px-12 flex items-center justify-center">
                <img
                  src={mgtStylesheet}
                  alt="MGT-Commerce Design System & Stylesheet"
                  className="max-w-full h-auto object-contain mx-auto rounded-[14px] sm:rounded-[18px]"
                />
              </div>
            </div>
          </section>

          {/* ========================================================= */}
          {/* SECTION 8: CROSS-FUNCTIONAL FLOW                          */}
          {/* ========================================================= */}
          <section id="collaboration" className="scroll-mt-28 pt-8">
            <h2 className="font-['Inter'] font-medium text-[28px] sm:text-[32px] text-[#363C30] mb-4">
              {content.collaboration.title}
            </h2>

            <p className="font-['Inter'] text-[16px] leading-[26px] text-[#5C6454] mb-4">
              {content.collaboration.p1}
            </p>

            <div className="space-y-4 my-6">
              {content.collaboration.roles.map((role, idx) => (
                <div key={idx} className="border-l-2 border-[#E3DAAE] pl-4">
                  <span className="font-['Inter'] font-semibold text-[15px] text-[#363C30] block">
                    {role.title}
                  </span>
                  <p className="font-['Inter'] text-[14px] leading-[22px] text-[#5C6454]">
                    {role.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>


          {/* ========================================================= */}
          {/* SECTION 10: REFLECTIONS                                   */}
          {/* ========================================================= */}
          <section id="results" className="scroll-mt-28 pt-8">
            <h2 className="font-['Inter'] font-medium text-[28px] sm:text-[32px] text-[#363C30] mb-6">
              {content.reflections.title}
            </h2>

            {/* Combined Results & Takeaways Card with Dashed Border */}
            <div className="border-2 border-dashed border-[#E3DAAE] rounded-[24px] overflow-hidden bg-transparent">
              {/* Top Metrics Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-dashed divide-[#E3DAAE]">
                {content.reflections.metrics.map((m, idx) => (
                  <div key={idx} className="p-6 sm:p-7 flex flex-col justify-between">
                    <span className="font-['Inter'] text-[15px] sm:text-[16px] text-[#5C6454] mb-3">
                      {m.label}
                    </span>
                    <span className="font-['Inter'] font-bold text-[36px] sm:text-[42px] text-[#363C30] leading-none">
                      {m.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Bottom Learnings / Takeaways Bulleted List */}
              <div className="border-t-2 border-dashed border-[#E3DAAE] p-6 sm:p-8">
                <p className="font-['Inter'] text-[15px] sm:text-[16px] leading-[26px] text-[#5C6454] mb-6">
                  {content.reflections.summary}
                </p>

                <h3 className="font-['Inter'] font-semibold text-[20px] text-[#363C30] mt-8 mb-4">
                  {content.reflections.learningsTitle}
                </h3>

                <ul className="space-y-4 font-['Inter'] text-[15px] sm:text-[16px] leading-[26px] text-[#5C6454]">
                  {content.reflections.learnings.map((learning, idx) => (
                    <li key={idx} className="flex items-start">
                      <span>
                        <strong className="text-[#363C30] font-semibold">{learning.bold}</strong> {learning.desc}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* ========================================================= */}
          {/* SECTION 11: NEXT PROJECT                                  */}
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
              <ProjectGrid onSelectProject={onSelectProject} excludeId="mgt-commerce" limit={2} />
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
};
