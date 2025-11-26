import React from 'react';

interface IconRotateClockwise2Props {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconRotateClockwise2: React.FC<IconRotateClockwise2Props> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-rotate-clockwise-2 ${defaultSize} ${userClassName}`.trim();

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
    <path d="M9 4.55a8 8 0 0 1 6 14.9m0 -4.45v5h5" />
    <path d="M5.63 7.16l0 .01" />
    <path d="M4.06 11l0 .01" />
    <path d="M4.63 15.1l0 .01" />
    <path d="M7.16 18.37l0 .01" />
    <path d="M11 19.94l0 .01" />
  </svg>
  );
};

export default IconRotateClockwise2;