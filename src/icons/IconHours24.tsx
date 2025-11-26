import React from 'react';

interface IconHours24Props {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconHours24: React.FC<IconHours24Props> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-hours-24 ${defaultSize} ${userClassName}`.trim();

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
    <path d="M4 13c.325 2.532 1.881 4.781 4 6" />
    <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2" />
    <path d="M4 5v4h4" />
    <path d="M12 15h2a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-1a1 1 0 0 0 -1 1v1a1 1 0 0 0 1 1h2" />
    <path d="M18 15v2a1 1 0 0 0 1 1h1" />
    <path d="M21 15v6" />
  </svg>
  );
};

export default IconHours24;