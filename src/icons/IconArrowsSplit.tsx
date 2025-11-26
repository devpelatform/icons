import React from 'react';

interface IconArrowsSplitProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconArrowsSplit: React.FC<IconArrowsSplitProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-arrows-split ${defaultSize} ${userClassName}`.trim();

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
    <path d="M21 17h-8l-3.5 -5h-6.5" />
    <path d="M21 7h-8l-3.495 5" />
    <path d="M18 10l3 -3l-3 -3" />
    <path d="M18 20l3 -3l-3 -3" />
  </svg>
  );
};

export default IconArrowsSplit;