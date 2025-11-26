import React from 'react';

interface IconAxisXProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconAxisX: React.FC<IconAxisXProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-axis-x ${defaultSize} ${userClassName}`.trim();

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
    <path d="M4 13v.01" />
    <path d="M4 9v.01" />
    <path d="M4 5v.01" />
    <path d="M17 20l3 -3l-3 -3" />
    <path d="M4 17h16" />
  </svg>
  );
};

export default IconAxisX;