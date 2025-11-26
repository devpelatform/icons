import React from 'react';

interface IconChartArrowsVerticalProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconChartArrowsVertical: React.FC<IconChartArrowsVerticalProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-chart-arrows-vertical ${defaultSize} ${userClassName}`.trim();

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
    <path d="M18 21v-14" />
    <path d="M9 15l3 -3l3 3" />
    <path d="M15 10l3 -3l3 3" />
    <path d="M3 21l18 0" />
    <path d="M12 21l0 -9" />
    <path d="M3 6l3 -3l3 3" />
    <path d="M6 21v-18" />
  </svg>
  );
};

export default IconChartArrowsVertical;