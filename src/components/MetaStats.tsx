import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface StatItemProps {
  label: string;
  value: string;
}

const StatItem: React.FC<StatItemProps & { hasStatusDot?: boolean }> = ({ label, value, hasStatusDot }) => (
  <div className="group inline-flex items-center gap-1.5 font-['Inter'] font-medium text-[14.5px] sm:text-[15.5px] leading-[26px] transition-all duration-300 hover:-translate-y-0.5 cursor-default select-none">
    {hasStatusDot && (
      <span className="relative flex h-2 w-2 mr-1">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#59866F] opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#59866F]"></span>
      </span>
    )}
    <span className="tracking-[0.02em] transition-colors duration-200 group-hover:text-[#363C30]" style={{ color: '#5C6454' }}>{label} </span>
    <span className="font-semibold tabular-nums tracking-[-0.01em] transition-colors duration-200" style={{ color: '#363C30' }}>{value}</span>
  </div>
);

export const MetaStats: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="flex flex-wrap items-center justify-between gap-y-2 gap-x-6 pt-1 pb-3">
      <StatItem label={t.metaStats.experienceLabel} value={t.metaStats.experienceValue} />
      <StatItem label={t.metaStats.specialisedLabel} value={t.metaStats.specialisedValue} />
      <StatItem label={t.metaStats.basedLabel} value={t.metaStats.basedValue} hasStatusDot={true} />
    </div>
  );
};
