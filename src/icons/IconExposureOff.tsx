import React from 'react';

interface IconExposureOffProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconExposureOff: React.FC<IconExposureOffProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-exposure-off ${defaultSize} ${userClassName}`.trim();

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
    <path d="M3.6 20.4l8.371 -8.371m2.04 -2.04l6.389 -6.389" />
    <path d="M6 8h2m0 0v2" />
    <path d="M14 16h2" />
    <path d="M7 3h12a2 2 0 0 1 2 2v12m-.5 3.5c-.362 .36 -.95 .5 -1.5 .5h-14a2 2 0 0 1 -2 -2v-14c0 -.541 .215 -1.033 .565 -1.393" />
    <path d="M3 3l18 18" />
  </svg>
  );
};

export default IconExposureOff;