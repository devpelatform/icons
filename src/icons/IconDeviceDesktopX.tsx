import React from 'react';

interface IconDeviceDesktopXProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconDeviceDesktopX: React.FC<IconDeviceDesktopXProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-device-desktop-x ${defaultSize} ${userClassName}`.trim();

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
    <path d="M13 16h-9a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v8" />
    <path d="M7 20h6.5" />
    <path d="M9 16v4" />
    <path d="M22 22l-5 -5" />
    <path d="M17 22l5 -5" />
  </svg>
  );
};

export default IconDeviceDesktopX;