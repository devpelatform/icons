import React from 'react';

interface IconFileTypeTxtProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconFileTypeTxt: React.FC<IconFileTypeTxtProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-file-type-txt ${defaultSize} ${userClassName}`.trim();

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
    <path d="M14 3v4a1 1 0 0 0 1 1h4" />
    <path d="M14 3v4a1 1 0 0 0 1 1h4" />
    <path d="M16.5 15h3" />
    <path d="M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4" />
    <path d="M4.5 15h3" />
    <path d="M6 15v6" />
    <path d="M18 15v6" />
    <path d="M10 15l4 6" />
    <path d="M10 21l4 -6" />
  </svg>
  );
};

export default IconFileTypeTxt;