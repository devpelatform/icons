import React from 'react';

interface IconSwitch2Props {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconSwitch2: React.FC<IconSwitch2Props> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-switch-2 ${defaultSize} ${userClassName}`.trim();

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
    <path d="M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6" />
    <path d="M18 4l3 3l-3 3" />
    <path d="M3 7h5l7 10h6" />
    <path d="M18 20l3 -3l-3 -3" />
  </svg>
  );
};

export default IconSwitch2;