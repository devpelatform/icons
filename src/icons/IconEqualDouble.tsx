import React from 'react';

interface IconEqualDoubleProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconEqualDouble: React.FC<IconEqualDoubleProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-equal-double ${defaultSize} ${userClassName}`.trim();

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
    <path d="M3 10h7" />
    <path d="M3 14h7" />
    <path d="M14 10h7" />
    <path d="M14 14h7" />
  </svg>
  );
};

export default IconEqualDouble;