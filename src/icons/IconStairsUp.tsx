import React from 'react';

interface IconStairsUpProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconStairsUp: React.FC<IconStairsUpProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-stairs-up ${defaultSize} ${userClassName}`.trim();

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
    <path d="M22 6h-5v5h-5v5h-5v5h-5" />
    <path d="M6 10v-7" />
    <path d="M3 6l3 -3l3 3" />
  </svg>
  );
};

export default IconStairsUp;