import React from 'react';

interface IconTxtProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconTxt: React.FC<IconTxtProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-txt ${defaultSize} ${userClassName}`.trim();

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
    <path d="M3 8h4" />
    <path d="M5 8v8" />
    <path d="M17 8h4" />
    <path d="M19 8v8" />
    <path d="M10 8l4 8" />
    <path d="M10 16l4 -8" />
  </svg>
  );
};

export default IconTxt;