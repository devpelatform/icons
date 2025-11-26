import React from 'react';

interface IconDeviceDesktopCheckProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconDeviceDesktopCheck: React.FC<IconDeviceDesktopCheckProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-device-desktop-check ${defaultSize} ${userClassName}`.trim();

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
    <path d="M12 16h-8a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v8" />
    <path d="M15 19l2 2l4 -4" />
    <path d="M7 20h4" />
    <path d="M9 16v4" />
  </svg>
  );
};

export default IconDeviceDesktopCheck;