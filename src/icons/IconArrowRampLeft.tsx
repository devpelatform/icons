import React from 'react';

interface IconArrowRampLeftProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconArrowRampLeft: React.FC<IconArrowRampLeftProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-arrow-ramp-left ${defaultSize} ${userClassName}`.trim();

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
    <path d="M17 3l0 8.707" />
    <path d="M13 7l4 -4l4 4" />
    <path d="M7 14l-4 -4l4 -4" />
    <path d="M17 21a11 11 0 0 0 -11 -11h-3" />
  </svg>
  );
};

export default IconArrowRampLeft;