import React from 'react';

interface IconScubaDivingProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconScubaDiving: React.FC<IconScubaDivingProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-scuba-diving ${defaultSize} ${userClassName}`.trim();

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
    <path d="M19 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
    <path d="M2 2l3 3l1.5 4l3.5 2l6 2l1 4l2.5 3" />
    <path d="M11 8l4.5 1.5" />
  </svg>
  );
};

export default IconScubaDiving;