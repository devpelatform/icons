import React from 'react';

interface IconSpacesProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconSpaces: React.FC<IconSpacesProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-spaces ${defaultSize} ${userClassName}`.trim();

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
    <path d="M6.045 9.777a6 6 0 1 0 5.951 .023" />
    <path d="M11.997 20.196a6 6 0 1 0 -2.948 -5.97" />
    <path d="M17.95 9.785q .05 -.386 .05 -.785a6 6 0 1 0 -3.056 5.23" />
  </svg>
  );
};

export default IconSpaces;