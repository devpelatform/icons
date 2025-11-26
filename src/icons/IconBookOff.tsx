import React from 'react';

interface IconBookOffProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBookOff: React.FC<IconBookOffProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-book-off ${defaultSize} ${userClassName}`.trim();

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
    <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 5.899 -1.096" />
    <path d="M3 6a9 9 0 0 1 2.114 -.884m3.8 -.21c1.07 .17 2.116 .534 3.086 1.094a9 9 0 0 1 9 0" />
    <path d="M3 6v13" />
    <path d="M12 6v2m0 4v7" />
    <path d="M21 6v11" />
    <path d="M3 3l18 18" />
  </svg>
  );
};

export default IconBookOff;