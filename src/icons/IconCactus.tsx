import React from 'react';

interface IconCactusProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconCactus: React.FC<IconCactusProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-cactus ${defaultSize} ${userClassName}`.trim();

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
    <path d="M18 8v5a3 3 0 0 1 -3 3h-1" />
    <path d="M10 21v-16a2 2 0 1 1 4 0v16" />
    <path d="M7 21h10" />
  </svg>
  );
};

export default IconCactus;