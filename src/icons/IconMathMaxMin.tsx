import React from 'react';

interface IconMathMaxMinProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconMathMaxMin: React.FC<IconMathMaxMinProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-math-max-min ${defaultSize} ${userClassName}`.trim();

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
    <path d="M15 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
    <path d="M5 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
    <path d="M3 14s.605 -5.44 2.284 -7.862m3.395 .026c2.137 2.652 4.547 9.113 6.68 11.719" />
    <path d="M18.748 18.038c.702 -.88 1.452 -3.56 2.252 -8.038" />
  </svg>
  );
};

export default IconMathMaxMin;