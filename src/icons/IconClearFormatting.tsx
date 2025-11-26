import React from 'react';

interface IconClearFormattingProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconClearFormatting: React.FC<IconClearFormattingProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-clear-formatting ${defaultSize} ${userClassName}`.trim();

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
    <path d="M17 15l4 4m0 -4l-4 4" />
    <path d="M7 6v-1h11v1" />
    <path d="M7 19l4 0" />
    <path d="M13 5l-4 14" />
  </svg>
  );
};

export default IconClearFormatting;