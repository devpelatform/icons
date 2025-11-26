import React from 'react';

interface IconWorldShareProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconWorldShare: React.FC<IconWorldShareProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-world-share ${defaultSize} ${userClassName}`.trim();

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
    <path d="M20.94 13.045a9 9 0 1 0 -8.953 7.955" />
    <path d="M3.6 9h16.8" />
    <path d="M3.6 15h9.4" />
    <path d="M11.5 3a17 17 0 0 0 0 18" />
    <path d="M12.5 3a16.991 16.991 0 0 1 2.529 10.294" />
    <path d="M16 22l5 -5" />
    <path d="M21 21.5v-4.5h-4.5" />
  </svg>
  );
};

export default IconWorldShare;