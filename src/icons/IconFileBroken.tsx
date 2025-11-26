import React from 'react';

interface IconFileBrokenProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconFileBroken: React.FC<IconFileBrokenProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-file-broken ${defaultSize} ${userClassName}`.trim();

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
    <path d="M5 7v-2a2 2 0 0 1 2 -2h7l5 5v2" />
    <path d="M19 19a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2" />
    <path d="M5 16h.01" />
    <path d="M5 13h.01" />
    <path d="M5 10h.01" />
    <path d="M19 13h.01" />
    <path d="M19 16h.01" />
  </svg>
  );
};

export default IconFileBroken;