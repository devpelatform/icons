import React from 'react';

interface IconDeviceTabletExclamationProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconDeviceTabletExclamation: React.FC<IconDeviceTabletExclamationProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-device-tablet-exclamation ${defaultSize} ${userClassName}`.trim();

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
    <path d="M15 21h-9a1 1 0 0 1 -1 -1v-16a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v8" />
    <path d="M11 17a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
    <path d="M19 16v3" />
    <path d="M19 22v.01" />
  </svg>
  );
};

export default IconDeviceTabletExclamation;