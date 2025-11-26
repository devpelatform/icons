import React from 'react';

interface IconWindOffProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconWindOff: React.FC<IconWindOffProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-wind-off ${defaultSize} ${userClassName}`.trim();

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
    <path d="M5 8h3m4 0h1.5a2.5 2.5 0 1 0 -2.34 -3.24" />
    <path d="M3 12h9" />
    <path d="M16 12h2.5a2.5 2.5 0 0 1 1.801 4.282" />
    <path d="M4 16h5.5a2.5 2.5 0 1 1 -2.34 3.24" />
    <path d="M3 3l18 18" />
  </svg>
  );
};

export default IconWindOff;