import React from 'react';

interface IconAntennaBars1Props {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconAntennaBars1: React.FC<IconAntennaBars1Props> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-antenna-bars-1 ${defaultSize} ${userClassName}`.trim();

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
    <path d="M6 18l0 .01" />
    <path d="M10 18l0 .01" />
    <path d="M14 18l0 .01" />
    <path d="M18 18l0 .01" />
  </svg>
  );
};

export default IconAntennaBars1;