import React from 'react';

interface IconIdOffProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconIdOff: React.FC<IconIdOffProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-id-off ${defaultSize} ${userClassName}`.trim();

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
    <path d="M8 4h10a3 3 0 0 1 3 3v10m-1.437 2.561c-.455 .279 -.99 .439 -1.563 .439h-12a3 3 0 0 1 -3 -3v-10c0 -1.083 .573 -2.031 1.433 -2.559" />
    <path d="M8.175 8.178a2 2 0 1 0 2.646 2.65" />
    <path d="M15 8h2" />
    <path d="M16 12h1" />
    <path d="M7 16h9" />
    <path d="M3 3l18 18" />
  </svg>
  );
};

export default IconIdOff;