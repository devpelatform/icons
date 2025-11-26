import React from 'react';

interface IconFlag2OffProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconFlag2Off: React.FC<IconFlag2OffProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-flag-2-off ${defaultSize} ${userClassName}`.trim();

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
    <path d="M5 14h9m4 0h1v-9h-10m-4 0v16" />
    <path d="M3 3l18 18" />
  </svg>
  );
};

export default IconFlag2Off;