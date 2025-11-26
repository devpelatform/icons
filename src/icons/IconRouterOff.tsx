import React from 'react';

interface IconRouterOffProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconRouterOff: React.FC<IconRouterOffProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-router-off ${defaultSize} ${userClassName}`.trim();

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
    <path d="M17 13h2a2 2 0 0 1 2 2v2m-.588 3.417c-.362 .36 -.861 .583 -1.412 .583h-14a2 2 0 0 1 -2 -2v-4a2 2 0 0 1 2 -2h8" />
    <path d="M17 17v.01" />
    <path d="M13 17v.01" />
    <path d="M12.226 8.2a4 4 0 0 1 6.024 .55" />
    <path d="M9.445 5.407a8 8 0 0 1 12.055 1.093" />
    <path d="M3 3l18 18" />
  </svg>
  );
};

export default IconRouterOff;