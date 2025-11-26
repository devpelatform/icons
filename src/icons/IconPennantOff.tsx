import React from 'react';

interface IconPennantOffProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconPennantOff: React.FC<IconPennantOffProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-pennant-off ${defaultSize} ${userClassName}`.trim();

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
    <path d="M8 21h4" />
    <path d="M10 21v-11m0 -4v-3" />
    <path d="M10 4l9 4l-4.858 2.16m-2.764 1.227l-1.378 .613" />
    <path d="M3 3l18 18" />
  </svg>
  );
};

export default IconPennantOff;