import React from 'react';

interface IconDeviceImacOffProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconDeviceImacOff: React.FC<IconDeviceImacOffProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-device-imac-off ${defaultSize} ${userClassName}`.trim();

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
    <path d="M7 3h13a1 1 0 0 1 1 1v12c0 .28 -.115 .532 -.3 .713m-3.7 .287h-13a1 1 0 0 1 -1 -1v-12c0 -.276 .112 -.526 .293 -.707" />
    <path d="M3 13h10m4 0h4" />
    <path d="M8 21h8" />
    <path d="M10 17l-.5 4" />
    <path d="M14 17l.5 4" />
    <path d="M3 3l18 18" />
  </svg>
  );
};

export default IconDeviceImacOff;