import React from 'react';

interface IconMapPauseProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconMapPause: React.FC<IconMapPauseProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-map-pause ${defaultSize} ${userClassName}`.trim();

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
    <path d="M13 19l-4 -2l-6 3v-13l6 -3l6 3l6 -3v9" />
    <path d="M9 4v13" />
    <path d="M15 7v6.5" />
    <path d="M17 17v5" />
    <path d="M21 17v5" />
  </svg>
  );
};

export default IconMapPause;