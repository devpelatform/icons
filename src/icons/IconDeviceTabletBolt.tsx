import React from 'react';

interface IconDeviceTabletBoltProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconDeviceTabletBolt: React.FC<IconDeviceTabletBoltProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-device-tablet-bolt ${defaultSize} ${userClassName}`.trim();

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
    <path d="M13.5 21h-7.5a1 1 0 0 1 -1 -1v-16a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v8" />
    <path d="M19 16l-2 3h4l-2 3" />
    <path d="M11 17a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
  </svg>
  );
};

export default IconDeviceTabletBolt;