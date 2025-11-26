import React from 'react';

interface IconDeviceIpadHorizontalXProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconDeviceIpadHorizontalX: React.FC<IconDeviceIpadHorizontalXProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-device-ipad-horizontal-x ${defaultSize} ${userClassName}`.trim();

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
    <path d="M13.5 20h-8.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7" />
    <path d="M22 22l-5 -5" />
    <path d="M17 22l5 -5" />
    <path d="M9 17h4" />
  </svg>
  );
};

export default IconDeviceIpadHorizontalX;