import React from 'react';

interface IconViewportNarrowProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconViewportNarrow: React.FC<IconViewportNarrowProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-viewport-narrow ${defaultSize} ${userClassName}`.trim();

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
    <path d="M3 12h7l-3 -3" />
    <path d="M7 15l3 -3" />
    <path d="M21 12h-7l3 -3" />
    <path d="M17 15l-3 -3" />
    <path d="M9 6v-1a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v1" />
    <path d="M9 18v1a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-1" />
  </svg>
  );
};

export default IconViewportNarrow;