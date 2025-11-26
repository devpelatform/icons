import React from 'react';

interface IconChartAreaProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconChartArea: React.FC<IconChartAreaProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-chart-area ${defaultSize} ${userClassName}`.trim();

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
    <path d="M4 19l16 0" />
    <path d="M4 15l4 -6l4 2l4 -5l4 4l0 5l-16 0" />
  </svg>
  );
};

export default IconChartArea;