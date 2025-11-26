import React from 'react';

interface IconFileSymlinkProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconFileSymlink: React.FC<IconFileSymlinkProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-file-symlink ${defaultSize} ${userClassName}`.trim();

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
    <path d="M4 21v-4a3 3 0 0 1 3 -3h5" />
    <path d="M9 17l3 -3l-3 -3" />
    <path d="M14 3v4a1 1 0 0 0 1 1h4" />
    <path d="M5 11v-6a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-9.5" />
  </svg>
  );
};

export default IconFileSymlink;