import React from 'react';

interface IconHttpTraceOffProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconHttpTraceOff: React.FC<IconHttpTraceOffProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-http-trace-off ${defaultSize} ${userClassName}`.trim();

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
    <path d="M3 8h4" />
    <path d="M5 8v8" />
    <path d="M10 12h2m2 -2a2 2 0 0 0 -2 -2m-2 2v6" />
    <path d="M14 16l-3 -4" />
    <path d="M17 13v-3a2 2 0 1 1 4 0v6" />
    <path d="M17 13h4" />
    <path d="M3 3l18 18" />
  </svg>
  );
};

export default IconHttpTraceOff;