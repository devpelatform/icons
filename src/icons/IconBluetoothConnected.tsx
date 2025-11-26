import React from 'react';

interface IconBluetoothConnectedProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBluetoothConnected: React.FC<IconBluetoothConnectedProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-bluetooth-connected ${defaultSize} ${userClassName}`.trim();

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
    <path d="M7 8l10 8l-5 4l0 -16l5 4l-10 8" />
    <path d="M4 12l1 0" />
    <path d="M18 12l1 0" />
  </svg>
  );
};

export default IconBluetoothConnected;