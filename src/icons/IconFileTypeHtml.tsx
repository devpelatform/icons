import React from 'react';

interface IconFileTypeHtmlProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconFileTypeHtml: React.FC<IconFileTypeHtmlProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-file-type-html ${defaultSize} ${userClassName}`.trim();

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
    <path d="M14 3v4a1 1 0 0 0 1 1h4" />
    <path d="M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4" />
    <path d="M2 21v-6" />
    <path d="M5 15v6" />
    <path d="M2 18h3" />
    <path d="M20 15v6h2" />
    <path d="M13 21v-6l2 3l2 -3v6" />
    <path d="M7.5 15h3" />
    <path d="M9 15v6" />
  </svg>
  );
};

export default IconFileTypeHtml;