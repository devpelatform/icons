import React from 'react';

interface IconHttpHeadProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconHttpHead: React.FC<IconHttpHeadProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-http-head ${defaultSize} ${userClassName}`.trim();

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
    <path d="M3 16v-8" />
    <path d="M7 8v8" />
    <path d="M3 12h4" />
    <path d="M14 8h-4v8h4" />
    <path d="M10 12h2.5" />
    <path d="M17 16v-6a2 2 0 1 1 4 0v6" />
    <path d="M17 13h4" />
  </svg>
  );
};

export default IconHttpHead;