import React from 'react';

interface IconArrowsRandomProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconArrowsRandom: React.FC<IconArrowsRandomProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-arrows-random ${defaultSize} ${userClassName}`.trim();

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
    <path d="M20 21h-4v-4" />
    <path d="M16 21l5 -5" />
    <path d="M6.5 9.504l-3.5 -2l2 -3.504" />
    <path d="M3 7.504l6.83 -1.87" />
    <path d="M4 16l4 -1l1 4" />
    <path d="M8 15l-3.5 6" />
    <path d="M21 5l-.5 4l-4 -.5" />
    <path d="M20.5 9l-4.5 -5.5" />
  </svg>
  );
};

export default IconArrowsRandom;