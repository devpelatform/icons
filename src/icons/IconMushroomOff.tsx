import React from 'react';

interface IconMushroomOffProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconMushroomOff: React.FC<IconMushroomOffProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-mushroom-off ${defaultSize} ${userClassName}`.trim();

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
    <path d="M5.874 5.89a8.128 8.128 0 0 0 -1.874 5.21a.9 .9 0 0 0 .9 .9h7.1m4 0h3.1a.9 .9 0 0 0 .9 -.9c0 -4.474 -3.582 -8.1 -8 -8.1c-1.43 0 -2.774 .38 -3.936 1.047" />
    <path d="M10 12v7a2 2 0 1 0 4 0v-5" />
    <path d="M3 3l18 18" />
  </svg>
  );
};

export default IconMushroomOff;