import React from 'react';

interface IconBracketsAngleOffProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBracketsAngleOff: React.FC<IconBracketsAngleOffProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-brackets-angle-off ${defaultSize} ${userClassName}`.trim();

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
    <path d="M8 4h.01" />
    <path d="M6.453 6.474l-3.453 5.526l5 8" />
    <path d="M16 4l5 8l-1.917 3.067" />
    <path d="M17.535 17.544l-1.535 2.456" />
    <path d="M3 3l18 18" />
  </svg>
  );
};

export default IconBracketsAngleOff;