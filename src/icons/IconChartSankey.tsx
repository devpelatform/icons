import React from 'react';

interface IconChartSankeyProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconChartSankey: React.FC<IconChartSankeyProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-chart-sankey ${defaultSize} ${userClassName}`.trim();

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
    <path d="M3 6h18" />
    <path d="M3 8c10 0 8 9 18 9" />
  </svg>
  );
};

export default IconChartSankey;