import React from 'react';

interface IconChartScatter3dProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconChartScatter3d: React.FC<IconChartScatter3dProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-chart-scatter-3d ${defaultSize} ${userClassName}`.trim();

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
    <path d="M3 20l9 -7" />
    <path d="M12 3v10l9 7" />
    <path d="M17 12v.015" />
    <path d="M17 4.015v.015" />
    <path d="M21 8.015v.015" />
    <path d="M12 19.015v.015" />
    <path d="M3 12.015v.015" />
    <path d="M7 8.015v.015" />
    <path d="M3 4.015v.015" />
  </svg>
  );
};

export default IconChartScatter3d;