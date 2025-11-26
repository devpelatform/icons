import React from 'react';

interface IconHttpPutOffProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconHttpPutOff: React.FC<IconHttpPutOffProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-http-put-off ${defaultSize} ${userClassName}`.trim();

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
    <path d="M17 8h4" />
    <path d="M19 8v8" />
    <path d="M10 10v4a2 2 0 1 0 4 0m0 -4v-2" />
    <path d="M3 3l18 18" />
  </svg>
  );
};

export default IconHttpPutOff;