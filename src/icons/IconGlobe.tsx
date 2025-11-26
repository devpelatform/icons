import React from 'react';

interface IconGlobeProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconGlobe: React.FC<IconGlobeProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-globe ${defaultSize} ${userClassName}`.trim();

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
    <path d="M7 9a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
    <path d="M5.75 15a8.015 8.015 0 1 0 9.25 -13" />
    <path d="M11 17v4" />
    <path d="M7 21h8" />
  </svg>
  );
};

export default IconGlobe;