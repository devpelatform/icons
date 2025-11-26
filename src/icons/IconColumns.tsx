import React from 'react';

interface IconColumnsProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconColumns: React.FC<IconColumnsProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-columns ${defaultSize} ${userClassName}`.trim();

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
    <path d="M4 6l5.5 0" />
    <path d="M4 10l5.5 0" />
    <path d="M4 14l5.5 0" />
    <path d="M4 18l5.5 0" />
    <path d="M14.5 6l5.5 0" />
    <path d="M14.5 10l5.5 0" />
    <path d="M14.5 14l5.5 0" />
    <path d="M14.5 18l5.5 0" />
  </svg>
  );
};

export default IconColumns;