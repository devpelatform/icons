import React from 'react';

interface IconGardenCartOffProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconGardenCartOff: React.FC<IconGardenCartOffProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-garden-cart-off ${defaultSize} ${userClassName}`.trim();

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
    <path d="M15.733 15.732a2.5 2.5 0 1 0 3.544 3.527" />
    <path d="M6 8v11a1 1 0 0 0 1.806 .591l3.694 -5.091v.055" />
    <path d="M6 8h2m4 0h9l-3 6.01m-3.319 .693l-4.276 -.45a4 4 0 0 1 -3.296 -2.493l-2.853 -7.13a1 1 0 0 0 -.928 -.63h-1.323" />
    <path d="M3 3l18 18" />
  </svg>
  );
};

export default IconGardenCartOff;