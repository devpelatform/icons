import React from 'react';

interface IconMicroscopeOffProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconMicroscopeOff: React.FC<IconMicroscopeOffProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-microscope-off ${defaultSize} ${userClassName}`.trim();

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
    <path d="M5 21h14" />
    <path d="M6 18h2" />
    <path d="M7 18v3" />
    <path d="M10 10l-1 1l3 3l1 -1m2 -2l3 -3l-3 -3l-3 3" />
    <path d="M10.5 12.5l-1.5 1.5" />
    <path d="M17 3l3 3" />
    <path d="M12 21a6 6 0 0 0 5.457 -3.505m.441 -3.599a6 6 0 0 0 -2.183 -3.608" />
    <path d="M3 3l18 18" />
  </svg>
  );
};

export default IconMicroscopeOff;