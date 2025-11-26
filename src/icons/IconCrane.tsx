import React from 'react';

interface IconCraneProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconCrane: React.FC<IconCraneProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-crane ${defaultSize} ${userClassName}`.trim();

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
    <path d="M9 21v-18l-6 6h18" />
    <path d="M9 3l10 6" />
    <path d="M17 9v4a2 2 0 1 1 -2 2" />
  </svg>
  );
};

export default IconCrane;