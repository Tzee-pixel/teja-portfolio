import React, { useState, useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Sidebar } from './components/Sidebar';
import { EditorialHeadline } from './components/EditorialHeadline';
import { MetaStats } from './components/MetaStats';
import { ProjectGrid } from './components/ProjectGrid';
import { Testimonials } from './components/Testimonials';
import { BlogSection } from './components/BlogSection';
import { SocialLinksSection } from './components/SocialLinksSection';
import { Footer } from './components/Footer';
import { LanguageSwitcher } from './components/LanguageSwitcher';
import { CloudPanelCaseStudy } from './components/CloudPanelCaseStudy';
import { LocalBiteCaseStudy } from './components/LocalBiteCaseStudy';
import { BirlaEstatesCaseStudy } from './components/BirlaEstatesCaseStudy';
import { MagentoCaseStudy } from './components/MagentoCaseStudy';
import { AllProjectsPage } from './components/AllProjectsPage';

type ViewState = 'home' | 'projects' | 'cloudpanel' | 'localbite' | 'birla' | 'mgt-commerce';

export const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.includes('cloudpanel')) {
        setCurrentView('cloudpanel');
      } else if (hash.includes('localbite')) {
        setCurrentView('localbite');
      } else if (hash.includes('birla')) {
        setCurrentView('birla');
      } else if (hash.includes('mgt-commerce') || hash.includes('magento')) {
        setCurrentView('mgt-commerce');
      } else if (hash.includes('projects')) {
        setCurrentView('projects');
      } else {
        setCurrentView('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (view: ViewState) => {
    setCurrentView(view);
    if (view === 'projects') {
      window.location.hash = '#/projects';
    } else if (view !== 'home') {
      window.location.hash = `#/project/${view}`;
    } else {
      window.location.hash = '';
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  };

  const handleSelectProject = (projectId: string) => {
    if (projectId === 'magento' || projectId === 'mgt-commerce') {
      navigateTo('mgt-commerce');
    } else if (['cloudpanel', 'localbite', 'birla'].includes(projectId)) {
      navigateTo(projectId as ViewState);
    }
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case 'projects':
        return <AllProjectsPage onSelectProject={handleSelectProject} />;
      case 'cloudpanel':
        return <CloudPanelCaseStudy onBack={() => navigateTo('home')} onSelectProject={handleSelectProject} />;
      case 'localbite':
        return <LocalBiteCaseStudy onBack={() => navigateTo('home')} onSelectProject={handleSelectProject} />;
      case 'birla':
        return <BirlaEstatesCaseStudy onBack={() => navigateTo('home')} onSelectProject={handleSelectProject} />;
      case 'mgt-commerce':
        return <MagentoCaseStudy onBack={() => navigateTo('home')} onSelectProject={handleSelectProject} />;
      default:
        return (
          <div className="min-h-screen bg-[#FAF8EC] text-[#363C30] font-sans antialiased selection:bg-[#E3DAAE] selection:text-[#363C30] flex flex-col">
            <div className="relative w-full flex-1 flex flex-col lg:flex-row">
              <Sidebar />
              <main className="px-6 sm:px-10 pt-4 sm:pt-6 pb-12 lg:border-l-2 lg:border-dashed lg:border-[#E3DAAE] lg:ml-6 lg:pl-10 xl:ml-10 xl:pl-16 lg:pt-[54px] lg:pb-12 lg:pr-[60px] w-full flex-1 min-w-0">
                <div>
                  <EditorialHeadline />
                  <div className="mt-3 sm:mt-4">
                    <MetaStats />
                  </div>
                  <div className="mt-8 sm:mt-10 md:mt-12">
                    <ProjectGrid onSelectProject={handleSelectProject} />
                  </div>
                  <Testimonials />
                  <BlogSection />
                  <SocialLinksSection />
                </div>
              </main>
            </div>
            <Footer />
          </div>
        );
    }
  };

  return (
    <LanguageProvider>
      {renderCurrentView()}
      {/* Floating Minimalist Language Switcher (Bottom-Right) */}
      <LanguageSwitcher />
    </LanguageProvider>
  );
};

export default App;

