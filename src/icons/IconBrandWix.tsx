import React from 'react';

interface IconBrandWixProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBrandWix: React.FC<IconBrandWixProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-brand-wix ${defaultSize} ${userClassName}`.trim();

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
    <path d="M3 9l1.5 6l1.379 -5.515a.64 .64 0 0 1 1.242 0l1.379 5.515l1.5 -6" />
    <path d="M13 11.5v3.5" />
    <path d="M16 9l5 6" />
    <path d="M21 9l-5 6" />
    <path d="M13 9h.01" />
  </svg>
  );
};

export default IconBrandWix;