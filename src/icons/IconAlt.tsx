import React from 'react';

interface IconAltProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconAlt: React.FC<IconAltProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-alt ${defaultSize} ${userClassName}`.trim();

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
    <path d="M4 16v-6a2 2 0 1 1 4 0v6" />
    <path d="M4 13h4" />
    <path d="M11 8v8h4" />
    <path d="M16 8h4" />
    <path d="M18 8v8" />
  </svg>
  );
};

export default IconAlt;