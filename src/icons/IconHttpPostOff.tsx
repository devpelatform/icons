import React from 'react';

interface IconHttpPostOffProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconHttpPostOff: React.FC<IconHttpPostOffProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-http-post-off ${defaultSize} ${userClassName}`.trim();

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
    <path d="M3 12h2a2 2 0 1 0 0 -4h-2v8" />
    <path d="M12 8a2 2 0 0 1 2 2m0 4a2 2 0 1 1 -4 0v-4" />
    <path d="M20 16a1 1 0 0 0 1 -1v-2a1 1 0 0 0 -1 -1h-2a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1" />
    <path d="M3 3l18 18" />
  </svg>
  );
};

export default IconHttpPostOff;