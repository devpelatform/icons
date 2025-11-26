import React from 'react';

interface IconCactusOffProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconCactusOff: React.FC<IconCactusOffProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-cactus-off ${defaultSize} ${userClassName}`.trim();

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
    <path d="M6 9v1a3 3 0 0 0 3 3h1" />
    <path d="M18 8v5a3 3 0 0 1 -.129 .872m-2.014 2a3 3 0 0 1 -.857 .124h-1" />
    <path d="M10 21v-11m0 -4v-1a2 2 0 1 1 4 0v5m0 4v7" />
    <path d="M7 21h10" />
    <path d="M3 3l18 18" />
  </svg>
  );
};

export default IconCactusOff;