import React from 'react';

interface IconMathMaxProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconMathMax: React.FC<IconMathMaxProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-math-max ${defaultSize} ${userClassName}`.trim();

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
    <path d="M5 6a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
    <path d="M3 15s.616 -5.544 2.332 -7.93" />
    <path d="M8.637 7.112c2.717 3.313 5.882 12.888 8.363 12.888c2 0 3.333 -3 4 -9" />
  </svg>
  );
};

export default IconMathMax;