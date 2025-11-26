import React from 'react';

interface IconSignalHPlusProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconSignalHPlus: React.FC<IconSignalHPlusProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-signal-h-plus ${defaultSize} ${userClassName}`.trim();

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
    <path d="M7 16v-8" />
    <path d="M11 8v8" />
    <path d="M7 12h4" />
    <path d="M14 12h4" />
    <path d="M16 10v4" />
  </svg>
  );
};

export default IconSignalHPlus;