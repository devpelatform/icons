import React from 'react';

interface IconMathSecProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconMathSec: React.FC<IconMathSecProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-math-sec ${defaultSize} ${userClassName}`.trim();

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
    <path d="M3 15c.345 .6 1.258 1 2 1a2 2 0 1 0 0 -4a2 2 0 1 1 0 -4c.746 0 1.656 .394 2 1" />
    <path d="M21 10a2 2 0 1 0 -4 0v4a2 2 0 1 0 4 0" />
    <path d="M14 8h-4v8h4" />
    <path d="M10 12h2.5" />
  </svg>
  );
};

export default IconMathSec;