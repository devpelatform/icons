import React from 'react';

interface IconDeviceWatchBoltProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconDeviceWatchBolt: React.FC<IconDeviceWatchBoltProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-device-watch-bolt ${defaultSize} ${userClassName}`.trim();

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
    <path d="M13 18h-4a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3h6a3 3 0 0 1 3 3v3" />
    <path d="M9 18v3h4.5" />
    <path d="M9 6v-3h6v3" />
    <path d="M19 16l-2 3h4l-2 3" />
  </svg>
  );
};

export default IconDeviceWatchBolt;