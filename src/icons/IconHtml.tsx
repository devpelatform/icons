import React from 'react';

interface IconHtmlProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconHtml: React.FC<IconHtmlProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-html ${defaultSize} ${userClassName}`.trim();

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
    <path d="M13 16v-8l2 5l2 -5v8" />
    <path d="M1 16v-8" />
    <path d="M5 8v8" />
    <path d="M1 12h4" />
    <path d="M7 8h4" />
    <path d="M9 8v8" />
    <path d="M20 8v8h3" />
  </svg>
  );
};

export default IconHtml;