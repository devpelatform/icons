import React from 'react';

interface IconDeviceImacExclamationProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconDeviceImacExclamation: React.FC<IconDeviceImacExclamationProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-device-imac-exclamation ${defaultSize} ${userClassName}`.trim();

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
    <path d="M15 17h-11a1 1 0 0 1 -1 -1v-12a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v8.5" />
    <path d="M3 13h13" />
    <path d="M8 21h7" />
    <path d="M10 17l-.5 4" />
    <path d="M14 17l.5 4" />
    <path d="M19 16v3" />
    <path d="M19 22v.01" />
  </svg>
  );
};

export default IconDeviceImacExclamation;