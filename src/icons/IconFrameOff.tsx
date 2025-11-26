import React from 'react';

interface IconFrameOffProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconFrameOff: React.FC<IconFrameOffProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-frame-off ${defaultSize} ${userClassName}`.trim();

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
    <path d="M4 7h3m4 0h9" />
    <path d="M4 17h13" />
    <path d="M7 7v13" />
    <path d="M17 4v9m0 4v3" />
    <path d="M3 3l18 18" />
  </svg>
  );
};

export default IconFrameOff;