import React from 'react';

interface IconRouteAltLeftProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconRouteAltLeft: React.FC<IconRouteAltLeftProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-route-alt-left ${defaultSize} ${userClassName}`.trim();

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
    <path d="M8 3h-5v5" />
    <path d="M16 3h5v5" />
    <path d="M3 3l7.536 7.536a5 5 0 0 1 1.464 3.534v6.93" />
    <path d="M18 6.01v-.01" />
    <path d="M16 8.02v-.01" />
    <path d="M14 10v.01" />
  </svg>
  );
};

export default IconRouteAltLeft;