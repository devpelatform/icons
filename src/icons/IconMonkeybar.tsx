import React from 'react';

interface IconMonkeybarProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconMonkeybar: React.FC<IconMonkeybarProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-monkeybar ${defaultSize} ${userClassName}`.trim();

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
    <path d="M3 21v-15l5 -3l5 3v15" />
    <path d="M8 21v-7" />
    <path d="M3 14h10" />
    <path d="M6 10a2 2 0 1 1 4 0" />
    <path d="M13 13c6 0 3 8 8 8" />
  </svg>
  );
};

export default IconMonkeybar;