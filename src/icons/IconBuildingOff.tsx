import React from 'react';

interface IconBuildingOffProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBuildingOff: React.FC<IconBuildingOffProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-building-off ${defaultSize} ${userClassName}`.trim();

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
    <path d="M3 21h18" />
    <path d="M9 12h1" />
    <path d="M9 16h1" />
    <path d="M14 8h1" />
    <path d="M14 16h1" />
    <path d="M5 21v-16" />
    <path d="M7 3h10c1 0 2 1 2 2v10" />
    <path d="M19 19v2" />
    <path d="M3 3l18 18" />
  </svg>
  );
};

export default IconBuildingOff;