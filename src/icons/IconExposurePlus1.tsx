import React from 'react';

interface IconExposurePlus1Props {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconExposurePlus1: React.FC<IconExposurePlus1Props> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-exposure-plus-1 ${defaultSize} ${userClassName}`.trim();

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
    <path d="M3 12h6" />
    <path d="M6 9v6" />
    <path d="M18 19v-14l-4 4" />
  </svg>
  );
};

export default IconExposurePlus1;