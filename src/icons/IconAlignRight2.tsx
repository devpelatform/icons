import React from 'react';

interface IconAlignRight2Props {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconAlignRight2: React.FC<IconAlignRight2Props> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-align-right-2 ${defaultSize} ${userClassName}`.trim();

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
    <path d="M20 4v16" />
    <path d="M4 6h12" />
    <path d="M10 12h6" />
    <path d="M6 18h10" />
  </svg>
  );
};

export default IconAlignRight2;