import React from 'react';

interface IconPasswordProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconPassword: React.FC<IconPasswordProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-password ${defaultSize} ${userClassName}`.trim();

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
    <path d="M12 10v4" />
    <path d="M10 13l4 -2" />
    <path d="M10 11l4 2" />
    <path d="M5 10v4" />
    <path d="M3 13l4 -2" />
    <path d="M3 11l4 2" />
    <path d="M19 10v4" />
    <path d="M17 13l4 -2" />
    <path d="M17 11l4 2" />
  </svg>
  );
};

export default IconPassword;