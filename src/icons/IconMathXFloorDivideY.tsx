import React from 'react';

interface IconMathXFloorDivideYProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconMathXFloorDivideY: React.FC<IconMathXFloorDivideYProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-math-x-floor-divide-y ${defaultSize} ${userClassName}`.trim();

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
    <path d="M1.5 19l18 -18" />
    <path d="M4.5 22l18 -18" />
    <path d="M18 15l3 4" />
    <path d="M23 15l-4.5 8" />
    <path d="M1 1l6 6" />
    <path d="M1 7l6 -6" />
  </svg>
  );
};

export default IconMathXFloorDivideY;