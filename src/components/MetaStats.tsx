import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface StatItemProps {
  label: string;
  value: string;
}

const StatItem: React.FC<StatItemProps> = ({ label, value }) => (
  <div className="font-['Inter'] font-medium text-[15px] sm:text-[16px] leading-[26px]">
    <span style={{ color: '#5C6454' }}>{label} </span>
    <span style={{ color: '#363C30' }}>{value}</span>
  </div>
);

export const MetaStats: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="flex flex-wrap items-center justify-between gap-y-2 gap-x-6 pt-1 pb-3">
      <StatItem label={t.metaStats.experienceLabel} value={t.metaStats.experienceValue} />
      <StatItem label={t.metaStats.specialisedLabel} value={t.metaStats.specialisedValue} />
      <StatItem label={t.metaStats.basedLabel} value={t.metaStats.basedValue} />
    </div>
  );
};
