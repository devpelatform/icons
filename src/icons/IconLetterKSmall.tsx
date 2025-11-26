import React from 'react';

interface IconLetterKSmallProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconLetterKSmall: React.FC<IconLetterKSmallProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-letter-k-small ${defaultSize} ${userClassName}`.trim();

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
    <path d="M10.5 8v8" />
    <path d="M14.5 8l-3 4l3 4" />
    <path d="M10.5 12h1" />
  </svg>
  );
};

export default IconLetterKSmall;