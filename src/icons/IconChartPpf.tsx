import React from 'react';

interface IconChartPpfProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconChartPpf: React.FC<IconChartPpfProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-chart-ppf ${defaultSize} ${userClassName}`.trim();

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
    <path d="M19 17c0 -6.075 -5.373 -11 -12 -11" />
    <path d="M3 3v18h18" />
  </svg>
  );
};

export default IconChartPpf;