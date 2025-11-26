import React from 'react';

interface IconToolsKitchen2OffProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconToolsKitchen2Off: React.FC<IconToolsKitchen2OffProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-tools-kitchen-2-off ${defaultSize} ${userClassName}`.trim();

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
    <path d="M14.386 10.409c.53 -2.28 1.766 -4.692 4.614 -7.409v12m-4 0h-1c0 -.313 0 -.627 0 -.941" />
    <path d="M19 19v2h-1v-3" />
    <path d="M8 8v13" />
    <path d="M5 5v2a3 3 0 0 0 4.546 2.572m1.454 -2.572v-3" />
    <path d="M3 3l18 18" />
  </svg>
  );
};

export default IconToolsKitchen2Off;