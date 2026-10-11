import React, { useState, useEffect, useRef } from 'react';
import { ProjectGrid } from './ProjectGrid';
import { 
  ArrowLeft, 
  ArrowUpRight, 
  ArrowRight, 
  Copy, 
  Check,
  Compass,
  BookOpen,
  MapPin,
  Bookmark,
  Play,
  BarChart2,
  Users
} from 'lucide-react';
import { Footer } from './Footer';
import { useLanguage } from '../context/LanguageContext';
import { localbiteContent } from '../locales/caseStudies/localbite';
import localbiteThumbnail from '../assets/localbite-thumbnail.png';
import localbitePrototypeVideo from '../assets/localbite-prototype.mov';
import localbiteCompetitiveResearch from '../assets/localbite-competitive-research.png';
import localbiteDesignSystem from '../assets/localbite-design-system.png';
import localbiteExploreScreen from '../assets/localbite-explore-screen.png';
import nerimaDaikonLocalbite from '../assets/nerima-daikon-localbite.png';
import seasonalSearchLocalbite from '../assets/seasonal-search-localbite.png';
import localbiteFindNearbyCard from '../assets/localbite-find-nearby-card.png';
import localbiteFavouritesScreen from '../assets/localbite-favourites-screen.png';

interface LocalBiteCaseStudyProps {
  onBack: () => void;
  onSelectProject?: (id: string) => void;
}



export const LocalBiteCaseStudy: React.FC<LocalBiteCaseStudyProps> = ({ onBack, onSelectProject }) => {
  const { t, language } = useLanguage();
  const content = localbiteContent[language];
  const [activeSection, setActiveSection] = useState<string>('about');
  const [copied, setCopied] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [q1Active, setQ1Active] = useState(false);
  const [q2Active, setQ2Active] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const chartSectionRef = useRef<HTMLDivElement>(null);
  const q1TimerRef = useRef<any>(null);
  const q2TimerRef = useRef<any>(null);
  const email = "tzee.zende@gmail.com";

  const triggerQ1Animation = () => {
    if (q1TimerRef.current) clearTimeout(q1TimerRef.current);
    setQ1Active(false);
    q1TimerRef.current = setTimeout(() => {
      setQ1Active(true);
    }, 50);
  };

  const triggerQ2Animation = () => {
    if (q2TimerRef.current) clearTimeout(q2TimerRef.current);
    setQ2Active(false);
    q2TimerRef.current = setTimeout(() => {
      setQ2Active(true);
    }, 50);
  };

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const navItems = [
    { id: 'about', label: content.nav.about },
    { id: 'prototype', label: content.nav.prototype },
    { id: 'why', label: content.nav.why },
    { id: 'research', label: content.nav.research },
    { id: 'solution', label: content.nav.solution },
    { id: 'design-system', label: content.nav.designSystem },
    { id: 'features', label: content.nav.features },
    { id: 'reflection', label: content.nav.reflection },
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

    // IntersectionObserver to trigger smooth chart animations when scrolled into view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setQ1Active(true);
          setQ2Active(true);
        }
      },
      { threshold: 0.2 }
    );

    if (chartSectionRef.current) {
      observer.observe(chartSectionRef.current);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF8EC] text-[#363C30] font-sans antialiased selection:bg-[#E3DAAE] selection:text-[#363C30]">
      {/* ------------------------------------------------------------- */}
      {/* UNIFIED 2-COLUMN LAYOUT (CENTERED)                             */}
      {/* ------------------------------------------------------------- */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-[60px] pt-8 sm:pt-10 lg:pt-[50px] pb-12 lg:pb-[40px] flex flex-col lg:flex-row gap-8 lg:gap-14 items-start">
        
        {/* ----------------------------------------------------------- */}
        {/* LEFT COLUMN: BACK LINK + FLOATING SIDEBAR + CONTACT         */}
        {/* ----------------------------------------------------------- */}
        <aside className="w-full lg:w-[260px] xl:w-[280px] lg:flex-shrink-0 lg:sticky lg:top-10 lg:h-[calc(100vh-80px)] flex flex-col justify-between self-start">
          
          <div>
            {/* Top Row: Back to home page */}
            <div className="h-[34px] flex items-center mb-6 sm:mb-7">
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

              <span className="text-[14px] sm:text-[15px] font-medium text-[#5C6454]">
                {content.hero.typeBadge}
              </span>
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
                  {content.hero.meta.typeLabel}
                </span>
                <span className="font-['Inter'] font-semibold text-[15px] sm:text-[16px] text-[#363C30] leading-snug">
                  {content.hero.meta.typeValue}
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
                  {content.hero.meta.platformLabel}
                </span>
                <span className="font-['Inter'] font-semibold text-[15px] sm:text-[16px] text-[#363C30] leading-snug">
                  {content.hero.meta.platformValue}
                </span>
              </div>

              <div className="bg-transparent border-2 border-dashed border-[#E3DAAE] rounded-[14px] p-3.5 sm:p-4 flex flex-col justify-between">
                <span className="font-['Inter'] text-[12px] font-medium tracking-wide uppercase text-[#5C6454]/80 mb-1">
                  {content.hero.meta.toolsLabel}
                </span>
                <span className="font-['Inter'] font-semibold text-[15px] sm:text-[16px] text-[#363C30] leading-snug">
                  {content.hero.meta.toolsValue}
                </span>
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* SECTION 1: ABOUT LOCALBITE                                */}
          {/* ========================================================= */}
          <section id="about" className="scroll-mt-28">
            <h2 className="font-['Inter'] font-medium text-[28px] sm:text-[32px] text-[#363C30] mb-4">
              {content.about.title}
            </h2>

            <p className="font-['Inter'] text-[16px] leading-[26px] text-[#5C6454] mb-4">
              {content.about.p1}
            </p>

            <p className="font-['Inter'] text-[16px] leading-[26px] text-[#5C6454] mb-3">
              {content.about.p2}
            </p>

            <div className="border-l-2 border-[#E3DAAE] pl-4 my-4">
              <p className="font-['Inter'] text-[17px] font-medium italic text-[#363C30]">
                {content.about.coreQuestion}
              </p>
            </div>

            <p className="font-['Inter'] text-[16px] leading-[26px] text-[#5C6454] mb-4">
              {content.about.p3}
            </p>

            <p className="font-['Inter'] text-[16px] leading-[26px] text-[#5C6454] mb-3">
              {content.about.p4}
            </p>

            <p className="font-['Inter'] text-[15px] sm:text-[16px] leading-[26px] text-[#363C30] font-medium mb-4 italic">
              {content.about.subQuestions}
            </p>

            <p className="font-['Inter'] text-[16px] leading-[26px] text-[#363C30] font-semibold mb-4">
              {content.about.thesis}
            </p>

            <p className="font-['Inter'] text-[16px] leading-[26px] text-[#5C6454] mb-4">
              {content.about.helpsHeader}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="bg-[#FAF8EC] border border-[#E3DAAE]/70 rounded-[12px] p-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#E3DAAE]/40 flex items-center justify-center shrink-0 text-[#363C30]">
                  <Compass className="w-4 h-4 stroke-[2]" />
                </span>
                <span className="font-['Inter'] text-[15px] text-[#363C30] font-medium">{content.about.valueProps[0].label}</span>
              </div>
              <div className="bg-[#FAF8EC] border border-[#E3DAAE]/70 rounded-[12px] p-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#E3DAAE]/40 flex items-center justify-center shrink-0 text-[#363C30]">
                  <BookOpen className="w-4 h-4 stroke-[2]" />
                </span>
                <span className="font-['Inter'] text-[15px] text-[#363C30] font-medium">{content.about.valueProps[1].label}</span>
              </div>
              <div className="bg-[#FAF8EC] border border-[#E3DAAE]/70 rounded-[12px] p-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#E3DAAE]/40 flex items-center justify-center shrink-0 text-[#363C30]">
                  <MapPin className="w-4 h-4 stroke-[2]" />
                </span>
                <span className="font-['Inter'] text-[15px] text-[#363C30] font-medium">{content.about.valueProps[2].label}</span>
              </div>
              <div className="bg-[#FAF8EC] border border-[#E3DAAE]/70 rounded-[12px] p-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#E3DAAE]/40 flex items-center justify-center shrink-0 text-[#363C30]">
                  <Bookmark className="w-4 h-4 stroke-[2]" />
                </span>
                <span className="font-['Inter'] text-[15px] text-[#363C30] font-medium">{content.about.valueProps[3].label}</span>
              </div>
            </div>

            {/* VISUAL: LocalBite Overview Image */}
            <div className="mt-6 mb-0 w-full rounded-[18px] sm:rounded-[24px] overflow-hidden border border-[#E3DAAE]/60">
              <img
                src={localbiteThumbnail}
                alt="LocalBite Overview"
                className="w-full h-auto object-cover"
              />
            </div>
          </section>

          {/* ========================================================= */}
          {/* SECTION 2: THE PROTOTYPE                                  */}
          {/* ========================================================= */}
          <section id="prototype" className="scroll-mt-28 pt-4">
            <h2 className="font-['Inter'] font-medium text-[28px] sm:text-[32px] text-[#363C30] mb-4">
              {content.prototype.title}
            </h2>

            <p className="font-['Inter'] text-[16px] leading-[26px] text-[#5C6454] mb-4">
              {content.prototype.p1}
            </p>

            <p className="font-['Inter'] text-[16px] leading-[26px] text-[#5C6454] mb-6">
              {content.prototype.p2}
            </p>

            {/* Mobile Phone Mockup Video Showcase */}
            <div className="my-6 w-full rounded-[24px] bg-[#E3DAAE]/20 border border-[#E3DAAE]/50 py-8 sm:py-12 px-6 sm:px-12 flex flex-col items-center justify-center">
              {/* Phone Frame */}
              <div className="w-full max-w-[280px] sm:max-w-[320px] rounded-[44px] sm:rounded-[48px] border-[8px] sm:border-[10px] border-[#1C1917] shadow-[0_20px_50px_rgba(54,60,48,0.22)] overflow-hidden bg-[#1C1917] [transform:translateZ(0)] isolate">
                {/* Screen Content Wrapper with 654:1430 Aspect Ratio */}
                <div className="relative w-full rounded-[34px] sm:rounded-[38px] overflow-hidden aspect-[654/1430] [transform:translateZ(0)]">
                  <video
                    ref={videoRef}
                    src={localbitePrototypeVideo}
                    loop
                    playsInline
                    controls={isPlaying}
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    onEnded={() => setIsPlaying(false)}
                    className="w-full h-full object-cover object-top rounded-[34px] sm:rounded-[38px]"
                  />

                  {/* Warm Frosted Ivory / Peach Glass Overlay */}
                  {!isPlaying && (
                    <div
                      onClick={handlePlayVideo}
                      className="absolute inset-0 rounded-[34px] sm:rounded-[38px] bg-[#FAF8EC]/35 backdrop-blur-xl flex flex-col items-center justify-center p-6 z-10 cursor-pointer group transition-all duration-300"
                    >
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handlePlayVideo();
                        }}
                        className="px-6 py-2.5 rounded-full bg-[#363C30] hover:bg-[#252A20] text-[#FAF8EC] font-['Inter'] font-semibold text-[14px] sm:text-[15px] shadow-[0_6px_20px_rgba(54,60,48,0.22)] flex items-center gap-2.5 transition-all hover:scale-105 active:scale-95 cursor-pointer"
                      >
                        <Play size={15} className="fill-[#FAF8EC] text-[#FAF8EC]" />
                        <span>{content.prototype.playButton}</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <p className="font-['Inter'] text-[15px] sm:text-[16px] leading-[26px] text-[#5C6454] italic">
              {content.prototype.caption}
            </p>
          </section>

          {/* ========================================================= */}
          {/* SECTION 3: WHY I BUILT IT                                 */}
          {/* ========================================================= */}
          <section id="why" className="scroll-mt-28 pt-8">
            <h2 className="font-['Inter'] font-medium text-[28px] sm:text-[32px] text-[#363C30] mb-4">
              {content.why.title}
            </h2>

            <p className="font-['Inter'] text-[16px] leading-[26px] text-[#5C6454] mb-6">
              {content.why.p1}
            </p>

            <div className="space-y-4 mb-8">
              {content.why.points.map((pt, idx) => (
                <div key={idx} className="border-l-2 border-[#E3DAAE] pl-4">
                  <span className="font-['Inter'] font-semibold text-[15px] sm:text-[16px] text-[#363C30] block">
                    {pt.num}
                  </span>
                  <p className="font-['Inter'] text-[14px] sm:text-[15px] leading-[24px] text-[#5C6454] mt-1">
                    {pt.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* VISUAL: Existing Experience */}
            <div className="my-6 w-full rounded-[18px] sm:rounded-[24px] overflow-hidden border border-[#E3DAAE]/60 shadow-[0_4px_20px_rgba(54,60,48,0.04)]">
              <img
                src={localbiteCompetitiveResearch}
                alt="Competitive audit of Google Maps, Tabelog, and TripAdvisor showing the restaurant-first bias vs. dish discovery gap"
                className="w-full h-auto object-cover"
              />
            </div>

            <blockquote className="border-l-4 border-[#363C30] pl-4 my-6 italic text-[17px] sm:text-[18px] text-[#363C30] font-medium">
              {content.why.quote}
            </blockquote>
          </section>

          {/* ========================================================= */}
          {/* SECTION 4: USER RESEARCH                                  */}
          {/* ========================================================= */}
          <section id="research" className="scroll-mt-28 pt-8">
            <h2 className="font-['Inter'] font-medium text-[28px] sm:text-[32px] text-[#363C30] mb-4">
              {content.research.title}
            </h2>

            <p className="font-['Inter'] text-[16px] leading-[26px] text-[#5C6454] mb-4">
              {content.research.p1}
            </p>

            <p className="font-['Inter'] text-[16px] leading-[26px] text-[#5C6454] mb-4">
              {content.research.p2}
            </p>

            <div className="my-6 p-6 rounded-[16px] bg-[#FAF8EC] border-2 border-dashed border-[#E3DAAE] text-center">
              <span className="font-['Inter'] italic font-semibold text-[20px] sm:text-[24px] text-[#363C30]">
                {content.research.highlight}
              </span>
            </div>

            <p className="font-['Inter'] text-[16px] leading-[26px] text-[#5C6454] mb-6">
              {content.research.p3}
            </p>

            {/* SURVEY / RESEARCH FINDINGS: Google Forms Visual Dashboard */}
            <div 
              ref={chartSectionRef}
              className="my-8 rounded-[20px] sm:rounded-[24px] bg-[#FAF8EC] border border-[#E3DAAE] p-5 sm:p-7 shadow-[0_4px_24px_rgba(54,60,48,0.04)]"
            >
              {/* Google Forms Header Badge */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-[#E3DAAE]/60">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#7248B9]/10 border border-[#7248B9]/20 flex items-center justify-center text-[#7248B9]">
                    <BarChart2 size={18} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-['Inter'] font-semibold text-[15px] sm:text-[16px] text-[#363C30]">
                        {content.research.surveyTitle}
                      </span>
                      <span className="text-[11px] font-medium bg-[#7248B9]/10 text-[#7248B9] px-2 py-0.5 rounded-full font-mono">
                        {content.research.surveySource}
                      </span>
                    </div>
                    <span className="font-['Inter'] text-[12px] sm:text-[13px] text-[#5C6454]">
                      {content.research.surveyDesc}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#E3DAAE]/80 shadow-sm text-[12px] font-['Inter'] text-[#363C30] font-medium">
                  <Users size={14} className="text-[#AA461A]" />
                  <span>{content.research.responseCount}</span>
                </div>
              </div>

              {/* Research Insights Summary Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 my-6">
                {content.research.statCards.map((card, idx) => (
                  <div key={idx} className="bg-white rounded-[14px] p-4 border border-[#E3DAAE]/60 shadow-sm flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
                    <span className="font-['Inter'] text-[12px] font-medium text-[#5C6454] uppercase tracking-wider">
                      {card.tag}
                    </span>
                    <div className="my-1.5">
                      <span className={`font-['Inter'] font-bold text-[28px] sm:text-[32px] leading-none ${idx === 2 ? 'text-[#5C6454]' : 'text-[#AA461A]'}`}>
                        {card.value}
                      </span>
                    </div>
                    <p className="font-['Inter'] text-[12.5px] leading-[18px] text-[#363C30]">
                      {card.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Google Form Questions & Visual Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Question 1: Bar Chart */}
                <div 
                  onMouseEnter={triggerQ1Animation}
                  className="bg-white rounded-[16px] p-4 sm:p-5 border border-[#E3DAAE]/70 shadow-sm cursor-pointer transition-all duration-300 hover:shadow-md hover:border-[#AA461A]/40"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-['Inter'] text-[13px] font-semibold text-[#363C30] leading-snug">
                      {content.research.q1.title}
                    </span>
                  </div>

                  <div className="space-y-3 pt-1">
                    {content.research.q1.bars.map((bar, idx) => {
                      const colors = ['bg-[#AA461A]', 'bg-[#363C30]', 'bg-[#5C6454]', 'bg-[#8C9283]'];
                      const textColors = ['text-[#AA461A]', 'text-[#363C30]', 'text-[#5C6454]', 'text-[#8C9283]'];
                      const delays = ['', 'delay-150', 'delay-300', 'delay-500'];
                      return (
                        <div key={idx}>
                          <div className="flex justify-between text-[12px] font-['Inter'] mb-1">
                            <span className="text-[#363C30] font-medium truncate max-w-[210px] sm:max-w-none">
                              {bar.label}
                            </span>
                            <span className={`font-semibold ${textColors[idx]}`}>{bar.pct}</span>
                          </div>
                          <div className="w-full h-2.5 bg-[#FAF8EC] rounded-full overflow-hidden border border-[#E3DAAE]/40">
                            <div 
                              className={`h-full ${colors[idx]} rounded-full transition-all duration-1000 ${delays[idx]} ease-out`} 
                              style={{ width: q1Active ? bar.width : '0%' }} 
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Question 2: Pie / Proportion Breakdown */}
                <div 
                  onMouseEnter={triggerQ2Animation}
                  className="bg-white rounded-[16px] p-4 sm:p-5 border border-[#E3DAAE]/70 shadow-sm flex flex-col justify-between cursor-pointer transition-all duration-300 hover:shadow-md hover:border-[#AA461A]/40"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-['Inter'] text-[13px] font-semibold text-[#363C30] leading-snug">
                        {content.research.q2.title}
                      </span>
                    </div>

                    {/* Proportional Segment Bar */}
                    <div className="pt-2">
                      <div className="w-full h-4 rounded-full overflow-hidden flex shadow-inner bg-[#FAF8EC] border border-[#E3DAAE]/40">
                        <div 
                          className="bg-[#AA461A] h-full transition-all duration-1000 ease-out" 
                          style={{ width: q2Active ? '79.2%' : '0%' }} 
                          title="Dish First: 79.2%"
                        />
                        <div 
                          className="bg-[#E3DAAE] h-full transition-all duration-1000 delay-200 ease-out" 
                          style={{ width: q2Active ? '16.7%' : '0%' }} 
                          title="Restaurant First: 16.7%"
                        />
                        <div 
                          className="bg-[#D8D2C2] h-full transition-all duration-1000 delay-300 ease-out" 
                          style={{ width: q2Active ? '4.1%' : '0%' }} 
                          title="Neutral: 4.1%"
                        />
                      </div>

                      {/* Legend */}
                      <div className="mt-4 space-y-2 font-['Inter'] text-[12px]">
                        <div className="flex items-center justify-between p-1.5 rounded-lg bg-[#FAF8EC]/70">
                          <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-[#AA461A] flex-shrink-0" />
                            <span className="text-[#363C30] font-medium">
                              {content.research.q2.options[0].label}
                            </span>
                          </div>
                          <span className="font-semibold text-[#AA461A]">{content.research.q2.options[0].pct}</span>
                        </div>

                        <div className="flex items-center justify-between p-1.5 rounded-lg">
                          <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-[#E3DAAE] flex-shrink-0" />
                            <span className="text-[#5C6454] font-medium">
                              {content.research.q2.options[1].label}
                            </span>
                          </div>
                          <span className="font-semibold text-[#5C6454]">{content.research.q2.options[1].pct}</span>
                        </div>

                        <div className="flex items-center justify-between p-1.5 rounded-lg">
                          <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-[#D8D2C2] flex-shrink-0" />
                            <span className="text-[#8C9283] font-medium">
                              {content.research.q2.options[2].label}
                            </span>
                          </div>
                          <span className="font-semibold text-[#8C9283]">{content.research.q2.options[2].pct}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#E3DAAE]/50 flex items-center justify-between text-[11px] font-['Inter'] text-[#5C6454]">
                    <span>{content.research.q2.metricText}</span>
                    <span className="font-semibold text-[#363C30]">{content.research.q2.statusText}</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ========================================================= */}
          {/* SECTION 5: FROM RESEARCH TO SOLUTION                      */}
          {/* ========================================================= */}
          <section id="solution" className="scroll-mt-28 pt-8">
            <h2 className="font-['Inter'] font-medium text-[28px] sm:text-[32px] text-[#363C30] mb-4">
              {content.solution.title}
            </h2>

            <p className="font-['Inter'] text-[16px] leading-[26px] text-[#5C6454] mb-6">
              {content.solution.subtitle}
            </p>

            {/* Core User Flow Diagram */}
            <div className="my-8 rounded-[20px] bg-white border border-[#E3DAAE]/80 p-6 sm:p-8 shadow-[0_4px_20px_rgba(54,60,48,0.03)]">
              {/* Minimal Top Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-[#FAF8EC]">
                <div className="flex items-center gap-2">
                  <span className="font-['Inter'] font-semibold text-[15px] sm:text-[16px] text-[#363C30]">
                    {content.solution.journeyTitle}
                  </span>
                  <span className="text-[11px] font-medium bg-[#FAF8EC] text-[#5C6454] px-2.5 py-0.5 rounded-full border border-[#E3DAAE]/60">
                    {content.solution.flowTag}
                  </span>
                </div>
                <span className="text-[12px] font-['Inter'] text-[#5C6454]">
                  {content.solution.flowBreadcrumb}
                </span>
              </div>

              {/* Minimal 3-Stage Progression */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 relative">
                {/* 01: Discover */}
                <div className="p-4 sm:p-5 rounded-[14px] bg-[#FAF8EC]/60 border border-[#E3DAAE]/50 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-[11px] font-bold text-[#5C6454] tracking-wider uppercase">
                        {content.solution.steps[0].step}
                      </span>
                      <Compass size={15} className="text-[#5C6454]" />
                    </div>
                    <p className="font-['Inter'] font-semibold text-[15px] text-[#363C30] mb-2 leading-snug">
                      {content.solution.steps[0].title}
                    </p>
                    <p className="font-['Inter'] text-[13px] text-[#5C6454] leading-[20px]">
                      {content.solution.steps[0].desc}
                    </p>
                  </div>
                  <div className="pt-4 mt-3 border-t border-[#E3DAAE]/30 text-[11.5px] font-['Inter'] text-[#5C6454]">
                    <span>{content.solution.steps[0].outcomeLabel}</span>
                    <strong className="text-[#363C30] font-medium">{content.solution.steps[0].outcomeValue}</strong>
                  </div>
                </div>

                {/* 02: Understand */}
                <div className="p-4 sm:p-5 rounded-[14px] bg-[#FAF8EC] border-2 border-[#AA461A]/40 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-[11px] font-bold text-[#AA461A] tracking-wider uppercase">
                        {content.solution.steps[1].step}
                      </span>
                      <BookOpen size={15} className="text-[#AA461A]" />
                    </div>
                    <p className="font-['Inter'] font-semibold text-[15px] text-[#AA461A] mb-2 leading-snug">
                      {content.solution.steps[1].title}
                    </p>
                    <p className="font-['Inter'] text-[13px] text-[#5C6454] leading-[20px]">
                      {content.solution.steps[1].desc}
                    </p>
                  </div>
                  <div className="pt-4 mt-3 border-t border-[#E3DAAE]/40 text-[11.5px] font-['Inter'] text-[#5C6454]">
                    <span>{content.solution.steps[1].outcomeLabel}</span>
                    <strong className="text-[#AA461A] font-medium">{content.solution.steps[1].outcomeValue}</strong>
                  </div>
                </div>

                {/* 03: Find */}
                <div className="p-4 sm:p-5 rounded-[14px] bg-[#FAF8EC]/60 border border-[#E3DAAE]/50 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-[11px] font-bold text-[#5C6454] tracking-wider uppercase">
                        {content.solution.steps[2].step}
                      </span>
                      <MapPin size={15} className="text-[#5C6454]" />
                    </div>
                    <p className="font-['Inter'] font-semibold text-[15px] text-[#363C30] mb-2 leading-snug">
                      {content.solution.steps[2].title}
                    </p>
                    <p className="font-['Inter'] text-[13px] text-[#5C6454] leading-[20px]">
                      {content.solution.steps[2].desc}
                    </p>
                  </div>
                  <div className="pt-4 mt-3 border-t border-[#E3DAAE]/30 text-[11.5px] font-['Inter'] text-[#5C6454]">
                    <span>{content.solution.steps[2].outcomeLabel}</span>
                    <strong className="text-[#363C30] font-medium">{content.solution.steps[2].outcomeValue}</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Prototyping & Iteration Narrative */}
            <div className="mt-8 space-y-4">
              <h3 className="font-['Inter'] font-semibold text-[20px] sm:text-[22px] text-[#363C30]">
                {content.solution.aiNarrative.title}
              </h3>
              
              <p className="font-['Inter'] text-[16px] leading-[26px] text-[#5C6454]">
                {content.solution.aiNarrative.p1}
              </p>

              <p className="font-['Inter'] text-[16px] leading-[26px] text-[#5C6454]">
                {content.solution.aiNarrative.p2}
              </p>
            </div>
          </section>

          {/* ========================================================= */}
          {/* SECTION 8: DESIGN SYSTEM                                  */}
          {/* ========================================================= */}
          <section id="design-system" className="scroll-mt-28 pt-8">
            <h2 className="font-['Inter'] font-medium text-[28px] sm:text-[32px] text-[#363C30] mb-4">
              {content.designSystem.title}
            </h2>

            <p className="font-['Inter'] text-[16px] leading-[26px] text-[#5C6454] mb-4">
              {content.designSystem.intro}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-[12px] font-['Inter'] text-[#363C30] mb-6">
              {content.designSystem.tags.map((item, idx) => (
                <div key={idx} className="bg-[#FAF8EC] p-3 rounded-[8px] border border-[#E3DAAE]/60 text-center font-medium">
                  {item}
                </div>
              ))}
            </div>

            <p className="font-['Inter'] text-[16px] leading-[26px] text-[#5C6454] mb-4">
              {content.designSystem.description}
            </p>

            {/* VISUAL: Design System */}
            <div className="my-6 w-full rounded-[18px] sm:rounded-[24px] overflow-hidden border border-[#E3DAAE]/60 shadow-[0_4px_20px_rgba(54,60,48,0.04)]">
              <img
                src={localbiteDesignSystem}
                alt="LocalBite Design System component board: typography scales, food card variants, badges, and color palette"
                className="w-full h-auto object-cover"
              />
            </div>
          </section>

          {/* ========================================================= */}
          {/* SECTION 9: KEY FEATURES                                   */}
          {/* ========================================================= */}
          <section id="features" className="scroll-mt-28 pt-8">
            <h2 className="font-['Inter'] font-medium text-[28px] sm:text-[32px] text-[#363C30] mb-8">
              {content.features.title}
            </h2>

            <div className="space-y-16">
              {/* Feature 1: Text Left, Mockup Right */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="space-y-4">
                  <span className="font-mono text-[12px] font-bold text-[#AA461A] tracking-wider uppercase block">
                    {content.features.f1.tag}
                  </span>
                  <h3 className="font-['Inter'] font-semibold text-[22px] sm:text-[24px] text-[#363C30]">
                    {content.features.f1.title}
                  </h3>
                  <p className="font-['Inter'] text-[16px] leading-[26px] text-[#5C6454]">
                    {content.features.f1.desc}
                  </p>
                </div>

                {/* Mockup 1 */}
                <div className="w-full rounded-[24px] bg-[#E3DAAE]/20 border border-[#E3DAAE]/50 py-6 sm:py-8 px-6 flex flex-col items-center justify-center">
                  <div className="w-full max-w-[240px] sm:max-w-[260px] rounded-[38px] sm:rounded-[42px] border-[7px] sm:border-[8px] border-[#1C1917] shadow-[0_16px_40px_rgba(54,60,48,0.18)] overflow-hidden bg-[#1C1917] [transform:translateZ(0)] isolate">
                    <div className="relative w-full rounded-[30px] sm:rounded-[34px] overflow-hidden aspect-[9/19.5] bg-white [transform:translateZ(0)]">
                      <img
                        src={localbiteExploreScreen}
                        alt="LocalBite Home / Explore Screen"
                        className="w-full h-full object-cover object-top block"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature 2: Mockup Left, Text Right (Z-fold) */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Mockup 2 */}
                <div className="w-full rounded-[24px] bg-[#E3DAAE]/20 border border-[#E3DAAE]/50 py-6 sm:py-8 px-6 flex flex-col items-center justify-center order-2 lg:order-1">
                  <div className="w-full max-w-[240px] sm:max-w-[260px] rounded-[38px] sm:rounded-[42px] border-[7px] sm:border-[8px] border-[#1C1917] shadow-[0_16px_40px_rgba(54,60,48,0.18)] overflow-hidden bg-[#1C1917] [transform:translateZ(0)] isolate">
                    <div className="relative w-full rounded-[30px] sm:rounded-[34px] overflow-hidden aspect-[9/19.5] bg-white [transform:translateZ(0)]">
                      <div className="w-full h-full overflow-y-auto scroll-smooth overscroll-contain [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                        <img
                          src={nerimaDaikonLocalbite}
                          alt="LocalBite Dish Detail & Story Card - Nerima Daikon"
                          className="w-full h-auto object-cover object-top block"
                        />
                      </div>
                    </div>
                  </div>
                  <span className="mt-3 text-[11px] font-['Inter'] text-[#5C6454]/80 tracking-wide flex items-center gap-1.5">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#AA461A]/60 animate-pulse" />
                    {content.features.f2.scrollHint}
                  </span>
                </div>

                {/* Text 2 */}
                <div className="space-y-4 order-1 lg:order-2">
                  <span className="font-mono text-[12px] font-bold text-[#AA461A] tracking-wider uppercase block">
                    {content.features.f2.tag}
                  </span>
                  <h3 className="font-['Inter'] font-semibold text-[22px] sm:text-[24px] text-[#363C30]">
                    {content.features.f2.title}
                  </h3>
                  <p className="font-['Inter'] text-[16px] leading-[26px] text-[#5C6454]">
                    {content.features.f2.desc}
                  </p>

                  <div className="grid grid-cols-2 gap-2 text-[12.5px] font-['Inter'] text-[#363C30] my-2">
                    {content.features.f2.tags.map((tag, idx) => (
                      <div key={idx} className="bg-[#FAF8EC] p-2.5 rounded-[8px] border border-[#E3DAAE]/60">
                        {tag}
                      </div>
                    ))}
                  </div>

                  <p className="font-['Inter'] text-[15px] sm:text-[16px] leading-[26px] text-[#5C6454]">
                    {content.features.f2.footer}
                  </p>
                </div>
              </div>

              {/* Feature 3: Text Left, Mockup Right (Z-fold) */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="space-y-4">
                  <span className="font-mono text-[12px] font-bold text-[#AA461A] tracking-wider uppercase block">
                    {content.features.f3.tag}
                  </span>
                  <h3 className="font-['Inter'] font-semibold text-[22px] sm:text-[24px] text-[#363C30]">
                    {content.features.f3.title}
                  </h3>
                  <p className="font-['Inter'] text-[16px] leading-[26px] text-[#5C6454]">
                    {content.features.f3.desc}
                  </p>
                </div>

                {/* Mockup 3 */}
                <div className="w-full rounded-[24px] bg-[#E3DAAE]/20 border border-[#E3DAAE]/50 py-6 sm:py-8 px-6 flex flex-col items-center justify-center">
                  <div className="w-full max-w-[240px] sm:max-w-[260px] rounded-[38px] sm:rounded-[42px] border-[7px] sm:border-[8px] border-[#1C1917] shadow-[0_16px_40px_rgba(54,60,48,0.18)] overflow-hidden bg-[#1C1917] [transform:translateZ(0)] isolate">
                    <div className="relative w-full rounded-[30px] sm:rounded-[34px] overflow-hidden aspect-[9/19.5] bg-white [transform:translateZ(0)]">
                      <div className="w-full h-full overflow-y-auto scroll-smooth overscroll-contain [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                        <img
                          src={seasonalSearchLocalbite}
                          alt="LocalBite Seasonal and Regional Discovery Screen"
                          className="w-full h-auto object-cover object-top block"
                        />
                      </div>
                    </div>
                  </div>
                  <span className="mt-3 text-[11px] font-['Inter'] text-[#5C6454]/80 tracking-wide flex items-center gap-1.5">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#AA461A]/60 animate-pulse" />
                    {content.features.f3.scrollHint}
                  </span>
                </div>
              </div>

              {/* Feature 4: Card Left, Text Right (Z-fold) */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Visual Card 4 */}
                <div className="w-full rounded-[24px] bg-[#E3DAAE]/20 border border-[#E3DAAE]/50 py-8 sm:py-10 px-6 flex flex-col items-center justify-center order-2 lg:order-1">
                  <div className="w-full max-w-[340px] sm:max-w-[380px] rounded-[20px] overflow-hidden shadow-[0_12px_32px_rgba(54,60,48,0.12)] transition-transform duration-300 hover:scale-[1.02]">
                    <img
                      src={localbiteFindNearbyCard}
                      alt="Find it Nearby - Google Maps Integration Card"
                      className="w-full h-auto object-cover block"
                    />
                  </div>
                </div>

                {/* Text 4 */}
                <div className="space-y-4 order-1 lg:order-2">
                  <span className="font-mono text-[12px] font-bold text-[#AA461A] tracking-wider uppercase block">
                    {content.features.f4.tag}
                  </span>
                  <h3 className="font-['Inter'] font-semibold text-[22px] sm:text-[24px] text-[#363C30]">
                    {content.features.f4.title}
                  </h3>
                  <p className="font-['Inter'] text-[16px] leading-[26px] text-[#5C6454]">
                    {content.features.f4.desc}
                  </p>

                  {/* Step Ribbon */}
                  <div className="py-3 px-4 bg-[#FAF8EC] border border-[#E3DAAE]/70 rounded-[10px] text-center font-['Inter'] font-semibold text-[13.5px] sm:text-[14.5px] text-[#363C30] my-2">
                    {content.features.f4.flowBadge}
                  </div>
                </div>
              </div>

              {/* Feature 5: Text Left, Mockup Right (Z-fold) */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="space-y-4">
                  <span className="font-mono text-[12px] font-bold text-[#AA461A] tracking-wider uppercase block">
                    {content.features.f5.tag}
                  </span>
                  <h3 className="font-['Inter'] font-semibold text-[22px] sm:text-[24px] text-[#363C30]">
                    {content.features.f5.title}
                  </h3>
                  <p className="font-['Inter'] text-[16px] leading-[26px] text-[#5C6454]">
                    {content.features.f5.desc}
                  </p>
                </div>

                {/* Mockup 5 */}
                <div className="w-full rounded-[24px] bg-[#E3DAAE]/20 border border-[#E3DAAE]/50 py-6 sm:py-8 px-6 flex flex-col items-center justify-center">
                  <div className="w-full max-w-[240px] sm:max-w-[260px] rounded-[38px] sm:rounded-[42px] border-[7px] sm:border-[8px] border-[#1C1917] shadow-[0_16px_40px_rgba(54,60,48,0.18)] overflow-hidden bg-[#1C1917] [transform:translateZ(0)] isolate">
                    <div className="relative w-full rounded-[30px] sm:rounded-[34px] overflow-hidden aspect-[9/19.5] bg-white [transform:translateZ(0)]">
                      <div className="w-full h-full overflow-y-auto scroll-smooth overscroll-contain [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                        <img
                          src={localbiteFavouritesScreen}
                          alt="LocalBite Favourites & Saved Dishes Screen"
                          className="w-full h-auto object-cover object-top block"
                        />
                      </div>
                    </div>
                  </div>
                  <span className="mt-3 text-[11px] font-['Inter'] text-[#5C6454]/80 tracking-wide flex items-center gap-1.5">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#AA461A]/60 animate-pulse" />
                    {content.features.f5.scrollHint}
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* ========================================================= */}
          {/* SECTION 10: REFLECTION & NEXT STEPS                       */}
          {/* ========================================================= */}
          <section id="reflection" className="scroll-mt-28 pt-8">
            <h2 className="font-['Inter'] font-medium text-[28px] sm:text-[32px] text-[#363C30] mb-6">
              {content.reflection.title}
            </h2>

            {/* Combined Reflection Card */}
            <div className="border-2 border-dashed border-[#E3DAAE] rounded-[24px] overflow-hidden bg-transparent p-6 sm:p-8 mb-8">
              {content.reflection.card.map((item, idx) => (
                <p key={idx} className="font-['Inter'] text-[16px] leading-[26px] text-[#5C6454] mb-4 last:mb-0">
                  {item.prefix}
                  <strong className="text-[#363C30] font-semibold">{item.bold}</strong>
                  {item.suffix}
                </p>
              ))}
            </div>

            <div className="space-y-4">
              <h3 className="font-['Inter'] font-semibold text-[22px] sm:text-[24px] text-[#363C30]">
                {content.reflection.nextStepsTitle}
              </h3>
              <p className="font-['Inter'] text-[16px] leading-[26px] text-[#5C6454] mb-4">
                {content.reflection.nextStepsIntro}
              </p>

              <ul className="space-y-3 font-['Inter'] text-[15px] sm:text-[16px] leading-[26px] text-[#5C6454] pl-2">
                {content.reflection.nextStepsList.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-[#363C30] mt-1.5 select-none leading-none text-[18px]">•</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>

              <p className="font-['Inter'] text-[15px] sm:text-[16px] leading-[26px] text-[#363C30] font-medium pt-2 italic">
                {content.reflection.closing}
              </p>
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
              <ProjectGrid onSelectProject={onSelectProject} excludeId="localbite" limit={2} />
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
};
