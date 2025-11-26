import React from 'react';

interface IconDeskProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconDesk: React.FC<IconDeskProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-desk ${defaultSize} ${userClassName}`.trim();

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
    <path d="M3 6h18" />
    <path d="M4 6v13" />
    <path d="M20 19v-13" />
    <path d="M4 10h16" />
    <path d="M15 6v8a2 2 0 0 0 2 2h3" />
  </svg>
  );
};

export default IconDesk;