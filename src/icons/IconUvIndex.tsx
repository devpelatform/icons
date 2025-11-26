import React from 'react';

interface IconUvIndexProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconUvIndex: React.FC<IconUvIndexProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-uv-index ${defaultSize} ${userClassName}`.trim();

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
    <path d="M3 12h1m16 0h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7m-9.7 5.7a4 4 0 1 1 8 0" />
    <path d="M12 4v-1" />
    <path d="M13 16l2 5h1l2 -5" />
    <path d="M6 16v3a2 2 0 1 0 4 0v-3" />
  </svg>
  );
};

export default IconUvIndex;