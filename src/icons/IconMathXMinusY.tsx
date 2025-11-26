import React from 'react';

interface IconMathXMinusYProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconMathXMinusY: React.FC<IconMathXMinusYProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-math-x-minus-y ${defaultSize} ${userClassName}`.trim();

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
    <path d="M2 9l6 6" />
    <path d="M2 15l6 -6" />
    <path d="M16 9l3 5.063" />
    <path d="M22 9l-4.8 9" />
    <path d="M10 12h4" />
  </svg>
  );
};

export default IconMathXMinusY;