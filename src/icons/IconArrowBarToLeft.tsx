import React from 'react';

interface IconArrowBarToLeftProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconArrowBarToLeft: React.FC<IconArrowBarToLeftProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-arrow-bar-to-left ${defaultSize} ${userClassName}`.trim();

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
    <path d="M10 12l10 0" />
    <path d="M10 12l4 4" />
    <path d="M10 12l4 -4" />
    <path d="M4 4l0 16" />
  </svg>
  );
};

export default IconArrowBarToLeft;