import React from 'react';

interface IconMathXDivideY2Props {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconMathXDivideY2: React.FC<IconMathXDivideY2Props> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-math-x-divide-y-2 ${defaultSize} ${userClassName}`.trim();

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
    <path d="M3 21l18 -18" />
    <path d="M15 14l3 4.5" />
    <path d="M21 14l-4.5 7" />
    <path d="M3 4l6 6" />
    <path d="M3 10l6 -6" />
  </svg>
  );
};

export default IconMathXDivideY2;