import React from 'react';

interface IconBaselineDensitySmallProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBaselineDensitySmall: React.FC<IconBaselineDensitySmallProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-baseline-density-small ${defaultSize} ${userClassName}`.trim();

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
    <path d="M4 3h16" />
    <path d="M4 9h16" />
    <path d="M4 15h16" />
    <path d="M4 21h16" />
  </svg>
  );
};

export default IconBaselineDensitySmall;