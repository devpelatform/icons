import React from 'react';

interface IconArrowsRightLeftProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconArrowsRightLeft: React.FC<IconArrowsRightLeftProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-arrows-right-left ${defaultSize} ${userClassName}`.trim();

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
    <path d="M21 7l-18 0" />
    <path d="M18 10l3 -3l-3 -3" />
    <path d="M6 20l-3 -3l3 -3" />
    <path d="M3 17l18 0" />
  </svg>
  );
};

export default IconArrowsRightLeft;