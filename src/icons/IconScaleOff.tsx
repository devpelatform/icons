import React from 'react';

interface IconScaleOffProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconScaleOff: React.FC<IconScaleOffProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-scale-off ${defaultSize} ${userClassName}`.trim();

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
    <path d="M7 20h10" />
    <path d="M9.452 5.425l2.548 -.425l6 1" />
    <path d="M12 3v5m0 4v8" />
    <path d="M9 12l-3 -6l-3 6a3 3 0 0 0 6 0" />
    <path d="M18.873 14.871a3 3 0 0 0 2.127 -2.871l-3 -6l-2.677 5.355" />
    <path d="M3 3l18 18" />
  </svg>
  );
};

export default IconScaleOff;