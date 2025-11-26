import React from 'react';

interface IconIdBadgeOffProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconIdBadgeOff: React.FC<IconIdBadgeOffProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-id-badge-off ${defaultSize} ${userClassName}`.trim();

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
    <path d="M7.141 3.125a3 3 0 0 1 .859 -.125h8a3 3 0 0 1 3 3v9m-.13 3.874a3 3 0 0 1 -2.87 2.126h-8a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 .128 -.869" />
    <path d="M11.179 11.176a2 2 0 1 0 2.635 2.667" />
    <path d="M10 6h4" />
    <path d="M9 18h6" />
    <path d="M3 3l18 18" />
  </svg>
  );
};

export default IconIdBadgeOff;