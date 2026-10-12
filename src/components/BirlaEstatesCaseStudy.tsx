import React, { useState, useEffect } from 'react';
import { ProjectGrid } from './ProjectGrid';
import { 
  ArrowLeft, 
  ArrowUpRight, 
  ArrowRight, 
  Copy, 
  Check,
  LayoutDashboard,
  BellRing,
  Play
} from 'lucide-react';
import { Footer } from './Footer';
import { useLanguage } from '../context/LanguageContext';
import { birlaContent } from '../locales/caseStudies/birla';

// Birla Estates Prototype Workflow Screenshots
import screen01RoleSelect from '../assets/birla-screens/01-role-selection.png';
import screen02ManagerDashboard from '../assets/birla-screens/02-manager-dashboard.png';
import screen03ManagerCreateTask from '../assets/birla-screens/03-manager-create-task.png';
import screen04ManagerAllTasks from '../assets/birla-screens/04-manager-all-tasks.png';
import screen05ManagerTaskDetails from '../assets/birla-screens/05-manager-task-details.png';
import screen06ManagerTeam from '../assets/birla-screens/06-manager-team.png';
import screen08EmployeeTasks from '../assets/birla-screens/08-employee-tasks.png';
import screen09EmployeeTaskDetails from '../assets/birla-screens/09-employee-task-details.png';
import screen10EmployeeTeam from '../assets/birla-screens/10-employee-team.png';

interface BirlaEstatesCaseStudyProps {
  onBack: () => void;
  onSelectProject?: (id: string) => void;
}


export const BirlaEstatesCaseStudy: React.FC<BirlaEstatesCaseStudyProps> = ({ onBack, onSelectProject }) => {
  const { t, language } = useLanguage();
  const content = birlaContent[language];
  const [activeSection, setActiveSection] = useState<string>('introduction');
  const [copied, setCopied] = useState(false);
  const [isPrototypeActive, setIsPrototypeActive] = useState(false);
  const email = "tzee.zende@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const navItems = [
    { id: 'introduction', label: content.nav.introduction },
    { id: 'results', label: content.nav.results },
    { id: 'problem', label: content.nav.problem },
    { id: 'users', label: content.nav.users },
    { id: 'workflow', label: content.nav.workflow },
    { id: 'final-experience', label: content.nav.finalExperience },
    { id: 'reflections', label: content.nav.reflections },
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
                href="https://birla-estates-agile.vercel.app/manager/dashboard"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 text-[#5C6454] hover:text-[#363C30] font-['Inter'] font-medium text-[14px] sm:text-[15px] transition-colors duration-200 cursor-pointer"
              >
                <span>{content.hero.livePrototype}</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.2] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            <h1 className="font-['Inter'] font-medium text-[32px] sm:text-[40px] sm:leading-[44px] leading-tight tracking-tight text-[#363C30] mb-4">
              {content.hero.title}
            </h1>

            <p className="font-['Inter'] font-normal text-[16px] leading-[26px] text-[#5C6454] max-w-3xl mb-6">
              {content.hero.description}
            </p>

            {/* Project Metadata - 3 Distinct Cards with Dashed Border */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-2">
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

            <p className="font-['Inter'] text-[16px] leading-[26px] text-[#5C6454] mb-4">
              {content.introduction.p2}
            </p>

            <p className="font-['Inter'] text-[16px] leading-[26px] text-[#5C6454] mb-4">
              {content.introduction.p3}
            </p>

            <p className="font-['Inter'] text-[14px] sm:text-[15px] leading-[24px] text-[#5C6454]/90 italic mb-6">
              {content.introduction.confidentialityNote}
            </p>

            {/* Live Interactive Prototype Container */}
            <div className="my-8 w-full rounded-[24px] sm:rounded-[28px] bg-[#CE9199] p-3 sm:p-6 lg:p-8 flex flex-col items-center">
              {/* Outer Device/Table Frame without drop shadow */}
              <div className="w-full bg-[#FFFFFF] rounded-[16px] sm:rounded-[20px] border border-black overflow-hidden flex flex-col">
                {/* Browser/Window Header Bar with Very Very Dark Background (Slim Height) */}
                <div className="bg-[#1C1F19] px-3 sm:px-4 py-1.5 sm:py-2 border-b border-black flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                  </div>

                  <div className="flex items-center gap-1.5 bg-[#282C24] px-2.5 py-0.5 rounded-[5px] border border-white/10 text-[10px] sm:text-[11px] font-['Inter'] text-[#D8DECE] max-w-[240px] sm:max-w-md truncate">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#27C93F]" />
                    <span className="truncate">birla-estates-agile.vercel.app/manager/dashboard</span>
                  </div>

                  <a
                    href="https://birla-estates-agile.vercel.app/manager/dashboard"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-['Inter'] font-semibold text-[#FAF8EC] hover:text-white transition-colors"
                    title="Open in new tab"
                  >
                    <span className="hidden sm:inline">{content.introduction.openLink}</span>
                    <ArrowUpRight className="w-3 h-3 stroke-[2.2]" />
                  </a>
                </div>

                {/* Full Desktop Width Aspect Ratio (16:9 / 1440px wide rendered canvas) */}
                <div className="w-full h-[400px] sm:h-[480px] md:h-[540px] lg:h-[580px] bg-[#16131F] relative overflow-hidden group">
                  <iframe
                    src="https://birla-estates-agile.vercel.app/manager/dashboard"
                    title="Birla Estates Agile Interactive Prototype"
                    className="w-[150%] h-[150%] border-0 origin-top-left transform scale-[0.667]"
                    loading="lazy"
                  />

                  {/* Semi-transparent Overlay with Center 'Live Prototype' Button */}
                  {!isPrototypeActive && (
                    <div className="absolute inset-0 bg-[#16131F]/65 backdrop-blur-[2px] flex flex-col items-center justify-center p-4 transition-all duration-300 z-20">
                      <button
                        onClick={() => setIsPrototypeActive(true)}
                        className="group/btn inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#FAF8EC] hover:bg-white text-[#363C30] font-['Inter'] font-semibold text-[15px] sm:text-[16px] shadow-[0_8px_30px_rgba(0,0,0,0.35)] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer border border-[#E3DAAE]"
                      >
                        <span className="w-7 h-7 rounded-full bg-[#363C30] text-white flex items-center justify-center">
                          <Play className="w-3.5 h-3.5 fill-current translate-x-0.5" />
                        </span>
                        <span>{content.introduction.prototypeButton}</span>
                      </button>
                      <p className="mt-3 font-['Inter'] text-[12px] sm:text-[13px] text-[#FAF8EC]/80 font-medium">
                        {content.introduction.prototypeHint}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* ========================================================= */}
          {/* SECTION 2: RESULTS                                        */}
          {/* ========================================================= */}
          <section id="results" className="scroll-mt-28 pt-8">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-12 mb-8">
              <h2 className="font-['Inter'] font-medium text-[32px] sm:text-[38px] text-[#363C30] tracking-tight shrink-0">
                {content.results.title}
              </h2>
              <p className="font-['Inter'] text-[15px] sm:text-[16px] leading-[26px] text-[#5C6454] max-w-xl">
                {content.results.subtitle}
              </p>
            </div>

            {/* 4 Metrics Cards with Dashed Border */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-4">
              {content.results.metrics.map((metric, idx) => (
                <div key={idx} className="bg-transparent border-2 border-dashed border-[#E3DAAE] rounded-[16px] p-6 flex flex-col justify-end min-h-[140px] sm:min-h-[150px]">
                  <div>
                    <span className="font-['Inter'] font-bold text-[36px] sm:text-[40px] text-[#363C30] block leading-none mb-2">
                      {metric.value}
                    </span>
                    <span className="font-['Inter'] text-[14px] text-[#5C6454]">
                      {metric.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ========================================================= */}
          {/* SECTION 3: THE PROBLEM                                    */}
          {/* ========================================================= */}
          <section id="problem" className="scroll-mt-28 pt-8">
            <h2 className="font-['Inter'] font-medium text-[28px] sm:text-[32px] text-[#363C30] mb-2">
              {content.problem.title}
            </h2>

            <p className="font-['Inter'] text-[16px] leading-[26px] text-[#5C6454] my-4">
              {content.problem.description}
            </p>

            <div className="my-6 space-y-4">
              <h3 className="font-['Inter'] font-semibold text-[18px] sm:text-[20px] text-[#363C30]">
                {content.problem.frictionTitle}
              </h3>

              <div className="space-y-3">
                {content.problem.frictionPoints.map((pt, idx) => (
                  <div key={idx} className="border-l-2 border-[#E3DAAE] pl-4">
                    <span className="font-['Inter'] font-semibold text-[15px] text-[#363C30] block">
                      {pt.label}
                    </span>
                    <p className="font-['Inter'] text-[14px] leading-[22px] text-[#5C6454]">
                      {pt.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ========================================================= */}
          {/* SECTION 4: USER ROLES & NEEDS                             */}
          {/* ========================================================= */}
          <section id="users" className="scroll-mt-28 pt-8">
            <h2 className="font-['Inter'] font-medium text-[28px] sm:text-[32px] text-[#363C30] mb-4">
              {content.users.title}
            </h2>

            <p className="font-['Inter'] text-[16px] leading-[26px] text-[#5C6454] mb-8">
              {content.users.description}
            </p>

            {/* Visually Appealing & Colorful User Persona Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Senior Manager Persona Card - Elegant Sage Green Theme */}
              <div className="bg-[#EBF1E8] border-2 border-[#B9CBB4] rounded-[22px] sm:rounded-[24px] p-6 sm:p-7 flex flex-col justify-between shadow-[0_4px_20px_rgba(54,60,48,0.05)] hover:shadow-[0_8px_28px_rgba(54,60,48,0.09)] transition-all duration-300">
                <div>
                  {/* Top Profile Header */}
                  <div className="flex items-center gap-4 pb-5 border-b border-[#B9CBB4]/70">
                    <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-full overflow-hidden border-2 border-[#FFFFFF] shadow-md shrink-0 bg-[#DEE8D9]">
                      <img
                        src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80"
                        alt="Senior Manager"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                        <span className="font-['Inter'] text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-[6px] bg-[#363C30] text-[#FAF8EC]">
                          {content.users.manager.badge}
                        </span>
                        <span className="font-['Inter'] text-[12px] font-medium text-[#5C6454]">
                          {content.users.manager.sub}
                        </span>
                      </div>
                      <h3 className="font-['Inter'] font-bold text-[20px] sm:text-[22px] text-[#363C30] leading-snug">
                        {content.users.manager.title}
                      </h3>
                    </div>
                  </div>

                  {/* Core Quote */}
                  <div className="bg-[#FFFFFF] rounded-[14px] p-4 my-5 border border-[#B9CBB4]/70 shadow-xs">
                    <p className="font-['Inter'] italic text-[14px] sm:text-[15px] leading-[22px] text-[#363C30] font-medium">
                      {content.users.manager.quote}
                    </p>
                  </div>

                  {/* Needs Section */}
                  <div>
                    <span className="font-['Inter'] font-bold text-[11px] text-[#5C6454] block mb-3 uppercase tracking-wider">
                      {content.users.manager.needsTitle}
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {content.users.manager.needs.map((need, idx) => (
                        <div
                          key={idx}
                          className="bg-[#FFFFFF] rounded-[10px] py-2 px-3 border border-[#B9CBB4]/60 text-[13px] font-['Inter'] text-[#363C30] font-medium"
                        >
                          {need}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Junior Employee Persona Card - Warm Blush Rose Theme */}
              <div className="bg-[#F6E8EA] border-2 border-[#D9AAB1] rounded-[22px] sm:rounded-[24px] p-6 sm:p-7 flex flex-col justify-between shadow-[0_4px_20px_rgba(54,60,48,0.05)] hover:shadow-[0_8px_28px_rgba(54,60,48,0.09)] transition-all duration-300">
                <div>
                  {/* Top Profile Header */}
                  <div className="flex items-center gap-4 pb-5 border-b border-[#D9AAB1]/60">
                    <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-full overflow-hidden border-2 border-[#FFFFFF] shadow-md shrink-0 bg-[#EED6DA]">
                      <img
                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80"
                        alt="Junior Employee"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                        <span className="font-['Inter'] text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-[6px] bg-[#CE9199] text-[#FFFFFF]">
                          {content.users.employee.badge}
                        </span>
                        <span className="font-['Inter'] text-[12px] font-medium text-[#5C6454]">
                          {content.users.employee.sub}
                        </span>
                      </div>
                      <h3 className="font-['Inter'] font-bold text-[20px] sm:text-[22px] text-[#363C30] leading-snug">
                        {content.users.employee.title}
                      </h3>
                    </div>
                  </div>

                  {/* Core Quote */}
                  <div className="bg-[#FFFFFF] rounded-[14px] p-4 my-5 border border-[#D9AAB1]/60 shadow-xs">
                    <p className="font-['Inter'] italic text-[14px] sm:text-[15px] leading-[22px] text-[#363C30] font-medium">
                      {content.users.employee.quote}
                    </p>
                  </div>

                  {/* Needs Section */}
                  <div>
                    <span className="font-['Inter'] font-bold text-[11px] text-[#5C6454] block mb-3 uppercase tracking-wider">
                      {content.users.employee.needsTitle}
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {content.users.employee.needs.map((need, idx) => (
                        <div
                          key={idx}
                          className="bg-[#FFFFFF] rounded-[10px] py-2 px-3 border border-[#D9AAB1]/60 text-[13px] font-['Inter'] text-[#363C30] font-medium"
                        >
                          {need}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ========================================================= */}
          {/* SECTION 5: WORKFLOW & INTERFACE                           */}
          {/* ========================================================= */}
          <section id="workflow" className="scroll-mt-28 pt-8">
            <h2 className="font-['Inter'] font-medium text-[28px] sm:text-[32px] text-[#363C30] mb-4">
              {content.workflow.title}
            </h2>

            <p className="font-['Inter'] text-[16px] leading-[26px] text-[#5C6454] mb-4">
              {content.workflow.subtitle}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-8">
              {/* Card 1: Managers Overview */}
              <div className="bg-[#FFFFFF] border-2 border-[#E3DAAE] rounded-[18px] sm:rounded-[20px] p-5 sm:p-6 shadow-[0_4px_20px_rgba(54,60,48,0.04)] hover:shadow-[0_8px_24px_rgba(54,60,48,0.07)] transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-[12px] bg-[#FAF8EC] border border-[#E3DAAE] flex items-center justify-center text-[#363C30]">
                      <LayoutDashboard className="w-5 h-5 stroke-[2]" />
                    </div>
                    <span className="font-['Inter'] text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-[6px] bg-[#E3DAAE]/60 text-[#363C30]">
                      {content.workflow.managerCard.tag}
                    </span>
                  </div>

                  <h3 className="font-['Inter'] font-semibold text-[17px] sm:text-[18px] text-[#363C30] mb-2">
                    {content.workflow.managerCard.title}
                  </h3>
                  <p className="font-['Inter'] text-[14px] sm:text-[15px] leading-[23px] text-[#5C6454]">
                    {content.workflow.managerCard.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-[#E3DAAE]/50 flex items-center gap-2 text-[12px] font-['Inter'] font-medium text-[#363C30]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#363C30]" />
                  <span>{content.workflow.managerCard.footer}</span>
                </div>
              </div>

              {/* Card 2: Employees Immediacy */}
              <div className="bg-[#FFFFFF] border-2 border-[#E3DAAE] rounded-[18px] sm:rounded-[20px] p-5 sm:p-6 shadow-[0_4px_20px_rgba(54,60,48,0.04)] hover:shadow-[0_8px_24px_rgba(54,60,48,0.07)] transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-[12px] bg-[#FBF1F2] border border-[#CE9199]/40 flex items-center justify-center text-[#363C30]">
                      <BellRing className="w-5 h-5 stroke-[2]" />
                    </div>
                    <span className="font-['Inter'] text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-[6px] bg-[#CE9199]/20 text-[#363C30]">
                      {content.workflow.employeeCard.tag}
                    </span>
                  </div>

                  <h3 className="font-['Inter'] font-semibold text-[17px] sm:text-[18px] text-[#363C30] mb-2">
                    {content.workflow.employeeCard.title}
                  </h3>
                  <p className="font-['Inter'] text-[14px] sm:text-[15px] leading-[23px] text-[#5C6454]">
                    {content.workflow.employeeCard.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-[#E3DAAE]/50 flex items-center gap-2 text-[12px] font-['Inter'] font-medium text-[#363C30]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#CE9199]" />
                  <span>{content.workflow.employeeCard.footer}</span>
                </div>
              </div>
            </div>
          </section>

          {/* ========================================================= */}
          {/* SECTION 6: THE FINAL EXPERIENCE                           */}
          {/* ========================================================= */}
          <section id="final-experience" className="scroll-mt-28 pt-8">
            <h2 className="font-['Inter'] font-medium text-[28px] sm:text-[32px] text-[#363C30] mb-2">
              {content.finalExperience.title}
            </h2>

            <h3 className="font-['Inter'] font-medium text-[20px] sm:text-[22px] text-[#363C30] mb-4">
              {content.finalExperience.subtitle}
            </h3>

            <p className="font-['Inter'] text-[16px] leading-[26px] text-[#5C6454] mb-4">
              {content.finalExperience.p1}
            </p>

            {/* Lifecycle Flow Ribbon */}
            <div className="my-6 py-3.5 px-4 bg-[#FAF8EC] border border-[#E3DAAE]/70 rounded-[12px] text-center font-['Inter'] font-semibold text-[15px] sm:text-[16px] text-[#363C30]">
              {content.finalExperience.ribbon}
            </div>

            <p className="font-['Inter'] text-[16px] leading-[26px] text-[#5C6454] mb-8">
              {content.finalExperience.p2}
            </p>

            {/* Core Workflow Screens - Single Pink Container in a 2-Column Staggered Layout */}
            <div className="bg-[#CE9199] rounded-[24px] sm:rounded-[32px] p-3 sm:p-5 md:p-6 my-10 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-3.5 md:gap-4 items-start">
                {/* Column 1 (Left) */}
                <div className="flex flex-col gap-2.5 sm:gap-3.5 md:gap-4">
                  {[
                    { id: '01', image: screen01RoleSelect, alt: 'Birla Estates Agile Screen 1' },
                    { id: '03', image: screen03ManagerCreateTask, alt: 'Birla Estates Agile Screen 3' },
                    { id: '05', image: screen05ManagerTaskDetails, alt: 'Birla Estates Agile Screen 5' },
                    { id: '07', image: screen08EmployeeTasks, alt: 'Birla Estates Agile Screen 7' },
                    { id: '09', image: screen10EmployeeTeam, alt: 'Birla Estates Agile Screen 9' }
                  ].map((screen) => (
                    <div 
                      key={screen.id}
                      className="rounded-[6px] sm:rounded-[8px] overflow-hidden bg-white shadow-none hover:scale-[1.01] transition-transform duration-200"
                    >
                      <img
                        src={screen.image}
                        alt={screen.alt}
                        className="w-full h-auto block"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>

                {/* Column 2 (Right - Staggered down significantly from top) */}
                <div className="flex flex-col gap-2.5 sm:gap-3.5 md:gap-4 md:pt-28 lg:pt-36">
                  {[
                    { id: '02', image: screen02ManagerDashboard, alt: 'Birla Estates Agile Screen 2' },
                    { id: '04', image: screen04ManagerAllTasks, alt: 'Birla Estates Agile Screen 4' },
                    { id: '06', image: screen06ManagerTeam, alt: 'Birla Estates Agile Screen 6' },
                    { id: '08', image: screen09EmployeeTaskDetails, alt: 'Birla Estates Agile Screen 8' }
                  ].map((screen) => (
                    <div 
                      key={screen.id}
                      className="rounded-[6px] sm:rounded-[8px] overflow-hidden bg-white shadow-none hover:scale-[1.01] transition-transform duration-200"
                    >
                      <img
                        src={screen.image}
                        alt={screen.alt}
                        className="w-full h-auto block"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-12 space-y-4">
              <h3 className="font-['Inter'] font-semibold text-[22px] sm:text-[24px] text-[#363C30]">
                {content.finalExperience.whatChanged.title}
              </h3>
              <p className="font-['Inter'] text-[16px] leading-[26px] text-[#5C6454] mb-6">
                {content.finalExperience.whatChanged.subtitle}
              </p>

              {/* 4 Outcome Highlight Cards with Dashed Border */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                {content.finalExperience.whatChanged.cards.map((card, idx) => (
                  <div key={idx} className="border-2 border-dashed border-[#E3DAAE] rounded-[18px] p-6">
                    <span className="font-['Inter'] font-bold text-[32px] sm:text-[36px] text-[#363C30] block mb-1">
                      {card.stat}
                    </span>
                    <span className="font-['Inter'] font-semibold text-[16px] text-[#363C30] block mb-2">
                      {card.title}
                    </span>
                    <p className="font-['Inter'] text-[14px] leading-[22px] text-[#5C6454]">
                      {card.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ========================================================= */}
          {/* SECTION 7: REFLECTIONS                                    */}
          {/* ========================================================= */}
          <section id="reflections" className="scroll-mt-28 pt-8">
            <h2 className="font-['Inter'] font-medium text-[28px] sm:text-[32px] text-[#363C30] mb-6">
              {content.reflections.title}
            </h2>

            {/* Learnings & Takeaways Card with Dashed Border */}
            <div className="border-2 border-dashed border-[#E3DAAE] rounded-[24px] overflow-hidden bg-transparent p-6 sm:p-8">
              <h3 className="font-['Inter'] font-semibold text-[20px] text-[#363C30] mb-4">
                {content.reflections.subtitle}
              </h3>

              <ul className="space-y-4 font-['Inter'] text-[15px] sm:text-[16px] leading-[26px] text-[#5C6454]">
                {content.reflections.learnings.map((learning, idx) => (
                  <li key={idx}>
                    <strong className="text-[#363C30] font-semibold">{learning.bold} </strong>
                    {learning.desc}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* ========================================================= */}
          {/* SECTION 8: NEXT PROJECT                                    */}
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
              <ProjectGrid onSelectProject={onSelectProject} excludeId="birla" limit={2} />
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
};
