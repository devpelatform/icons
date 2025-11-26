import React from 'react';

interface IconChartHistogramProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconChartHistogram: React.FC<IconChartHistogramProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-chart-histogram ${defaultSize} ${userClassName}`.trim();

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
    <path d="M20 18v3" />
    <path d="M16 16v5" />
    <path d="M12 13v8" />
    <path d="M8 16v5" />
    <path d="M3 11c6 0 5 -5 9 -5s3 5 9 5" />
  </svg>
  );
};

export default IconChartHistogram;