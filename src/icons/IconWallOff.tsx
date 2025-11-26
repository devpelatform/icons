import React from 'react';

interface IconWallOffProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconWallOff: React.FC<IconWallOffProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-wall-off ${defaultSize} ${userClassName}`.trim();

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
    <path d="M8 4h10a2 2 0 0 1 2 2v10m-.589 3.417c-.361 .36 -.86 .583 -1.411 .583h-12a2 2 0 0 1 -2 -2v-12c0 -.55 .222 -1.047 .58 -1.409" />
    <path d="M4 8h4m4 0h8" />
    <path d="M20 12h-4m-4 0h-8" />
    <path d="M4 16h12" />
    <path d="M9 4v1" />
    <path d="M14 8v2" />
    <path d="M8 12v4" />
    <path d="M11 16v4" />
    <path d="M3 3l18 18" />
  </svg>
  );
};

export default IconWallOff;