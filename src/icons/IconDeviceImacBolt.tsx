import React from 'react';

interface IconDeviceImacBoltProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconDeviceImacBolt: React.FC<IconDeviceImacBoltProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-device-imac-bolt ${defaultSize} ${userClassName}`.trim();

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
    <path d="M13.5 17h-9.5a1 1 0 0 1 -1 -1v-12a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v8.5" />
    <path d="M3 13h13" />
    <path d="M8 21h5.5" />
    <path d="M10 17l-.5 4" />
    <path d="M19 16l-2 3h4l-2 3" />
  </svg>
  );
};

export default IconDeviceImacBolt;