import React from 'react';

interface IconToolsOffProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconToolsOff: React.FC<IconToolsOffProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-tools-off ${defaultSize} ${userClassName}`.trim();

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
    <path d="M16 12l4 -4a2.828 2.828 0 1 0 -4 -4l-4 4m-2 2l-7 7v4h4l7 -7" />
    <path d="M14.5 5.5l4 4" />
    <path d="M12 8l-5 -5m-2 2l-2 2l5 5" />
    <path d="M7 8l-1.5 1.5" />
    <path d="M16 12l5 5m-2 2l-2 2l-5 -5" />
    <path d="M16 17l-1.5 1.5" />
    <path d="M3 3l18 18" />
  </svg>
  );
};

export default IconToolsOff;