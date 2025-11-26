import React from 'react';

interface IconArrowAutofitWidthProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconArrowAutofitWidth: React.FC<IconArrowAutofitWidthProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-arrow-autofit-width ${defaultSize} ${userClassName}`.trim();

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
    <path d="M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v6" />
    <path d="M10 18h-7" />
    <path d="M21 18h-7" />
    <path d="M6 15l-3 3l3 3" />
    <path d="M18 15l3 3l-3 3" />
  </svg>
  );
};

export default IconArrowAutofitWidth;