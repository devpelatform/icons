import React from 'react';

interface IconColumnsOffProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconColumnsOff: React.FC<IconColumnsOffProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-columns-off ${defaultSize} ${userClassName}`.trim();

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
    <path d="M4 6h2" />
    <path d="M4 10h5.5" />
    <path d="M4 14h5.5" />
    <path d="M4 18h5.5" />
    <path d="M14.5 6h5.5" />
    <path d="M14.5 10h5.5" />
    <path d="M18 14h2" />
    <path d="M14.5 18h3.5" />
    <path d="M3 3l18 18" />
  </svg>
  );
};

export default IconColumnsOff;