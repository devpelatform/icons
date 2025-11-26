import React from 'react';

interface IconMathMinProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconMathMin: React.FC<IconMathMinProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-math-min ${defaultSize} ${userClassName}`.trim();

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
    <path d="M15 18a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
    <path d="M3 13s1 -9 4 -9c2.48 0 5.643 9.565 8.36 12.883" />
    <path d="M18.748 17.038c.702 -.88 1.452 -3.56 2.252 -8.038" />
  </svg>
  );
};

export default IconMathMin;