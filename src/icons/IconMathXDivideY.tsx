import React from 'react';

interface IconMathXDivideYProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconMathXDivideY: React.FC<IconMathXDivideYProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-math-x-divide-y ${defaultSize} ${userClassName}`.trim();

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
    <path d="M9 3l6 6" />
    <path d="M9 9l6 -6" />
    <path d="M9 15l3 4.5" />
    <path d="M15 15l-4.5 7" />
    <path d="M5 12h14" />
  </svg>
  );
};

export default IconMathXDivideY;