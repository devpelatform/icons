import React from 'react';

interface IconGridGoldenratioProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconGridGoldenratio: React.FC<IconGridGoldenratioProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-grid-goldenratio ${defaultSize} ${userClassName}`.trim();

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
    <path d="M3 10h18" />
    <path d="M3 14h18" />
    <path d="M10 3v18" />
    <path d="M14 3v18" />
  </svg>
  );
};

export default IconGridGoldenratio;