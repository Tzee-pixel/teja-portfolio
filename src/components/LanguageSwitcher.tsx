import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <aside aria-label="Language selection" className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 select-none">
      <div 
        className="group flex items-center gap-1.5 p-1.5 bg-[#FAF8EC] rounded-[14px] shadow-[0_8px_30px_rgba(54,60,48,0.18)] transition-all duration-300 hover:shadow-[0_12px_36px_rgba(54,60,48,0.22)] hover:scale-[1.02]"
        style={{
          border: '2px solid #E3DAAE',
        }}
      >
        {/* Globe Icon */}
        <div className="pl-2.5 pr-1 text-[#363C30] flex items-center justify-center pointer-events-none">
          <Globe className="w-4 h-4 sm:w-[18px] sm:h-[18px] stroke-[2.2] transition-transform duration-700 ease-out group-hover:rotate-90" />
        </div>

        {/* English Button */}
        <button
          type="button"
          onClick={() => setLanguage('en')}
          className={`px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-[10px] font-['Inter'] text-[13px] sm:text-[14px] leading-tight transition-all duration-200 cursor-pointer focus:outline-none ${
            language === 'en'
              ? 'bg-[#363C30] text-[#FAF8EC] font-semibold shadow-xs'
              : 'text-[#5C6454] hover:text-[#363C30] hover:bg-[#E3DAAE]/50 font-medium'
          }`}
          aria-label="Switch to English"
          aria-pressed={language === 'en'}
        >
          English
        </button>

        {/* Japanese Button */}
        <button
          type="button"
          onClick={() => setLanguage('ja')}
          className={`px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-[10px] font-['Inter'] text-[13px] sm:text-[14px] leading-tight transition-all duration-200 cursor-pointer focus:outline-none ${
            language === 'ja'
              ? 'bg-[#363C30] text-[#FAF8EC] font-semibold shadow-xs'
              : 'text-[#5C6454] hover:text-[#363C30] hover:bg-[#E3DAAE]/50 font-medium'
          }`}
          aria-label="日本語に切り替える"
          aria-pressed={language === 'ja'}
        >
          日本語
        </button>
      </div>
    </aside>
  );
};

