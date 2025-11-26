import React from 'react';

interface IconFileShredderProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconFileShredder: React.FC<IconFileShredderProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-file-shredder ${defaultSize} ${userClassName}`.trim();

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
    <path d="M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4" />
    <path d="M3 12l18 0" />
    <path d="M6 16l0 2" />
    <path d="M10 16l0 6" />
    <path d="M14 16l0 2" />
    <path d="M18 16l0 4" />
  </svg>
  );
};

export default IconFileShredder;