import React from 'react';

interface IconChartScatterProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconChartScatter: React.FC<IconChartScatterProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-chart-scatter ${defaultSize} ${userClassName}`.trim();

  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
   className={finalClassName} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path d="M3 3v18h18" />
    <path d="M8 15.015v.015" />
    <path d="M16 16.015v.015" />
    <path d="M8 7.03v.015" />
    <path d="M12 11.03v.015" />
    <path d="M19 11.03v.015" />
  </svg>
  );
};

export default IconChartScatter;