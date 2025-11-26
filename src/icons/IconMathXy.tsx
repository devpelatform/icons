import React from 'react';

interface IconMathXyProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconMathXy: React.FC<IconMathXyProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-math-xy ${defaultSize} ${userClassName}`.trim();

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
    <path d="M14 9l3 5.063" />
    <path d="M4 9l6 6" />
    <path d="M4 15l6 -6" />
    <path d="M20 9l-4.8 9" />
  </svg>
  );
};

export default IconMathXy;