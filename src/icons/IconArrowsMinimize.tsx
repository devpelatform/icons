import React from 'react';

interface IconArrowsMinimizeProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconArrowsMinimize: React.FC<IconArrowsMinimizeProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-arrows-minimize ${defaultSize} ${userClassName}`.trim();

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
    <path d="M5 9l4 0l0 -4" />
    <path d="M3 3l6 6" />
    <path d="M5 15l4 0l0 4" />
    <path d="M3 21l6 -6" />
    <path d="M19 9l-4 0l0 -4" />
    <path d="M15 9l6 -6" />
    <path d="M19 15l-4 0l0 4" />
    <path d="M15 15l6 6" />
  </svg>
  );
};

export default IconArrowsMinimize;