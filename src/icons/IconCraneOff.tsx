import React from 'react';

interface IconCraneOffProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconCraneOff: React.FC<IconCraneOffProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-crane-off ${defaultSize} ${userClassName}`.trim();

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
    <path d="M6 21h6" />
    <path d="M9 21v-12" />
    <path d="M9 5v-2l-1 1" />
    <path d="M6 6l-3 3h6" />
    <path d="M13 9h8" />
    <path d="M9 3l10 6" />
    <path d="M17 9v4a2 2 0 0 1 2 2m-2 2a2 2 0 0 1 -2 -2" />
    <path d="M3 3l18 18" />
  </svg>
  );
};

export default IconCraneOff;