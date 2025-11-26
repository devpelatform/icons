import React from 'react';

interface IconDirectionArrowsProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconDirectionArrows: React.FC<IconDirectionArrowsProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-direction-arrows ${defaultSize} ${userClassName}`.trim();

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
    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
    <path d="M8 11l-1 1l1 1" />
    <path d="M11 8l1 -1l1 1" />
    <path d="M16 11l1 1l-1 1" />
    <path d="M11 16l1 1l1 -1" />
  </svg>
  );
};

export default IconDirectionArrows;