import React from 'react';

interface IconCapRoundedProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconCapRounded: React.FC<IconCapRoundedProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-cap-rounded ${defaultSize} ${userClassName}`.trim();

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
    <path d="M20 6h-9a6 6 0 1 0 0 12h9" />
    <path d="M13 12a2 2 0 1 1 -4 0a2 2 0 0 1 4 0" />
    <path d="M13 12h7" />
  </svg>
  );
};

export default IconCapRounded;