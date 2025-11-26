import React from 'react';

interface IconLifebuoyOffProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconLifebuoyOff: React.FC<IconLifebuoyOffProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-lifebuoy-off ${defaultSize} ${userClassName}`.trim();

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
    <path d="M9.171 9.172a4 4 0 0 0 5.65 5.663m1.179 -2.835a4 4 0 0 0 -4 -4" />
    <path d="M5.64 5.632a9 9 0 1 0 12.73 12.725m1.667 -2.301a9 9 0 0 0 -12.077 -12.1" />
    <path d="M15 15l3.35 3.35" />
    <path d="M9 15l-3.35 3.35" />
    <path d="M5.65 5.65l3.35 3.35" />
    <path d="M18.35 5.65l-3.35 3.35" />
    <path d="M3 3l18 18" />
  </svg>
  );
};

export default IconLifebuoyOff;