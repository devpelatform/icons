import React from 'react';

interface IconAdOffProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconAdOff: React.FC<IconAdOffProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-ad-off ${defaultSize} ${userClassName}`.trim();

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
    <path d="M9 5h10a2 2 0 0 1 2 2v10m-2 2h-14a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2" />
    <path d="M7 15v-4a2 2 0 0 1 2 -2m2 2v4" />
    <path d="M7 13h4" />
    <path d="M17 9v4" />
    <path d="M16.115 12.131c.33 .149 .595 .412 .747 .74" />
    <path d="M3 3l18 18" />
  </svg>
  );
};

export default IconAdOff;