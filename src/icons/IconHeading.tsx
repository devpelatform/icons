import React from 'react';

interface IconHeadingProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconHeading: React.FC<IconHeadingProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-heading ${defaultSize} ${userClassName}`.trim();

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
    <path d="M7 12h10" />
    <path d="M7 5v14" />
    <path d="M17 5v14" />
    <path d="M15 19h4" />
    <path d="M15 5h4" />
    <path d="M5 19h4" />
    <path d="M5 5h4" />
  </svg>
  );
};

export default IconHeading;