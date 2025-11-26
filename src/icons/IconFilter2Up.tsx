import React from 'react';

interface IconFilter2UpProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconFilter2Up: React.FC<IconFilter2UpProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-filter-2-up ${defaultSize} ${userClassName}`.trim();

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
    <path d="M4 6h16" />
    <path d="M6 12h12" />
    <path d="M9 18h3" />
    <path d="M19 22v-6m0 0l3 3m-3 -3l-3 3" />
  </svg>
  );
};

export default IconFilter2Up;