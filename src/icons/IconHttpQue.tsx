import React from 'react';

interface IconHttpQueProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconHttpQue: React.FC<IconHttpQueProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-http-que ${defaultSize} ${userClassName}`.trim();

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
    <path d="M5 8a2 2 0 0 1 2 2v4a2 2 0 1 1 -4 0v-4a2 2 0 0 1 2 -2" />
    <path d="M6 15l1 1" />
    <path d="M21 8h-4v8h4" />
    <path d="M17 12h2.5" />
    <path d="M10 8v6a2 2 0 1 0 4 0v-6" />
  </svg>
  );
};

export default IconHttpQue;