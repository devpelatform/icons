import React from 'react';

interface IconWindsockProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconWindsock: React.FC<IconWindsockProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-windsock ${defaultSize} ${userClassName}`.trim();

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
    <path d="M6 3v18" />
    <path d="M6 11l12 -1v-4l-12 -1" />
    <path d="M10 5.5v5" />
    <path d="M14 6v4" />
    <path d="M4 21h4" />
  </svg>
  );
};

export default IconWindsock;