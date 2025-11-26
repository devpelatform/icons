import React from 'react';

interface IconAbacusOffProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconAbacusOff: React.FC<IconAbacusOffProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-abacus-off ${defaultSize} ${userClassName}`.trim();

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
    <path d="M5 5v16" />
    <path d="M19 21v-2m0 -4v-12" />
    <path d="M5 7h2m4 0h8" />
    <path d="M5 15h10" />
    <path d="M8 13v4" />
    <path d="M11 13v4" />
    <path d="M16 16v1" />
    <path d="M14 5v4" />
    <path d="M11 5v2" />
    <path d="M8 8v1" />
    <path d="M3 21h18" />
    <path d="M3 3l18 18" />
  </svg>
  );
};

export default IconAbacusOff;