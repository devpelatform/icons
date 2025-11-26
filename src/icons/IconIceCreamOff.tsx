import React from 'react';

interface IconIceCreamOffProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconIceCreamOff: React.FC<IconIceCreamOffProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-ice-cream-off ${defaultSize} ${userClassName}`.trim();

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
    <path d="M12 21.5v-4.5" />
    <path d="M8 8v9h8v-1m0 -4v-5a4 4 0 0 0 -7.277 -2.294" />
    <path d="M8 10.5l1.74 -.76m2.79 -1.222l3.47 -1.518" />
    <path d="M8 14.5l4.488 -1.964" />
    <path d="M3 3l18 18" />
  </svg>
  );
};

export default IconIceCreamOff;