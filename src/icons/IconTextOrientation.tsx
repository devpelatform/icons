import React from 'react';

interface IconTextOrientationProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconTextOrientation: React.FC<IconTextOrientationProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-text-orientation ${defaultSize} ${userClassName}`.trim();

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
    <path d="M9 15l-5 -5c-1.367 -1.367 -1.367 -3.633 0 -5s3.633 -1.367 5 0l5 5" />
    <path d="M5.5 11.5l5 -5" />
    <path d="M21 12l-9 9" />
    <path d="M21 12v4" />
    <path d="M21 12h-4" />
  </svg>
  );
};

export default IconTextOrientation;