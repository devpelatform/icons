import React from 'react';

interface IconDisabledOffProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconDisabledOff: React.FC<IconDisabledOffProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-disabled-off ${defaultSize} ${userClassName}`.trim();

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
    <path d="M11 7a2 2 0 1 0 -2 -2" />
    <path d="M11 11v4h4l4 5" />
    <path d="M15 11h1" />
    <path d="M7 11.5a5 5 0 1 0 6 7.5" />
    <path d="M3 3l18 18" />
  </svg>
  );
};

export default IconDisabledOff;