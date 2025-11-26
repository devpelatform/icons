import React from 'react';

interface IconFeatherOffProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconFeatherOff: React.FC<IconFeatherOffProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-feather-off ${defaultSize} ${userClassName}`.trim();

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
    <path d="M4 20l8 -8" />
    <path d="M14 5v5h5" />
    <path d="M9 11v4h4" />
    <path d="M6 13v5h5" />
    <path d="M6 13l3.502 -3.502m2.023 -2.023l2.475 -2.475" />
    <path d="M19 10c.638 -.636 1 -1.515 1 -2.486a3.515 3.515 0 0 0 -3.517 -3.514c-.97 0 -1.847 .367 -2.483 1" />
    <path d="M11 18l3.499 -3.499m2.008 -2.008l2.493 -2.493" />
    <path d="M3 3l18 18" />
  </svg>
  );
};

export default IconFeatherOff;