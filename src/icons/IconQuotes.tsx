import React from 'react';

interface IconQuotesProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconQuotes: React.FC<IconQuotesProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-quotes ${defaultSize} ${userClassName}`.trim();

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
    <path d="M4 12c-1.333 -1.854 -1.333 -4.146 0 -6" />
    <path d="M8 12c-1.333 -1.854 -1.333 -4.146 0 -6" />
    <path d="M16 18c1.333 -1.854 1.333 -4.146 0 -6" />
    <path d="M20 18c1.333 -1.854 1.333 -4.146 0 -6" />
  </svg>
  );
};

export default IconQuotes;