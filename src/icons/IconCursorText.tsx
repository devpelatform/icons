import React from 'react';

interface IconCursorTextProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconCursorText: React.FC<IconCursorTextProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-cursor-text ${defaultSize} ${userClassName}`.trim();

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
    <path d="M10 12h4" />
    <path d="M9 4a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3" />
    <path d="M15 4a3 3 0 0 0 -3 3v10a3 3 0 0 0 3 3" />
  </svg>
  );
};

export default IconCursorText;