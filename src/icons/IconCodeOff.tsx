import React from 'react';

interface IconCodeOffProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconCodeOff: React.FC<IconCodeOffProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-code-off ${defaultSize} ${userClassName}`.trim();

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
    <path d="M7 8l-4 4l4 4" />
    <path d="M17 8l4 4l-2.5 2.5" />
    <path d="M14 4l-1.201 4.805m-.802 3.207l-2 7.988" />
    <path d="M3 3l18 18" />
  </svg>
  );
};

export default IconCodeOff;