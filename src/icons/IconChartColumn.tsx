import React from 'react';

interface IconChartColumnProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconChartColumn: React.FC<IconChartColumnProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-chart-column ${defaultSize} ${userClassName}`.trim();

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
    <path d="M4 20h3" />
    <path d="M17 20h3" />
    <path d="M10.5 20h3" />
    <path d="M4 16h3" />
    <path d="M17 16h3" />
    <path d="M10.5 16h3" />
    <path d="M4 12h3" />
    <path d="M17 12h3" />
    <path d="M10.5 12h3" />
    <path d="M4 8h3" />
    <path d="M17 8h3" />
    <path d="M4 4h3" />
  </svg>
  );
};

export default IconChartColumn;