import React from 'react';

interface IconDeviceImacPauseProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconDeviceImacPause: React.FC<IconDeviceImacPauseProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-device-imac-pause ${defaultSize} ${userClassName}`.trim();

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
    <path d="M13 17h-9a1 1 0 0 1 -1 -1v-12a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v9" />
    <path d="M3 13h18" />
    <path d="M8 21h5" />
    <path d="M10 17l-.5 4" />
    <path d="M17 17v5" />
    <path d="M21 17v5" />
  </svg>
  );
};

export default IconDeviceImacPause;