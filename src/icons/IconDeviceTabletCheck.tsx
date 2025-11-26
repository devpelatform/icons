import React from 'react';

interface IconDeviceTabletCheckProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconDeviceTabletCheck: React.FC<IconDeviceTabletCheckProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-device-tablet-check ${defaultSize} ${userClassName}`.trim();

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
    <path d="M11.5 21h-5.5a1 1 0 0 1 -1 -1v-16a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v9.5" />
    <path d="M12.314 16.05a1 1 0 0 0 -1.042 1.635" />
    <path d="M15 19l2 2l4 -4" />
  </svg>
  );
};

export default IconDeviceTabletCheck;