import React from 'react';

interface IconHomeOffProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconHomeOff: React.FC<IconHomeOffProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-home-off ${defaultSize} ${userClassName}`.trim();

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
    <path d="M5 12h-2l4.497 -4.497m2 -2l2.504 -2.504l9 9h-2" />
    <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2m0 -4v-3" />
    <path d="M9 21v-6a2 2 0 0 1 2 -2h2m2 2v6" />
    <path d="M3 3l18 18" />
  </svg>
  );
};

export default IconHomeOff;