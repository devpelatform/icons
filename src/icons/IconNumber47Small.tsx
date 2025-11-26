import React from 'react';

interface IconNumber47SmallProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconNumber47Small: React.FC<IconNumber47SmallProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-number-47-small ${defaultSize} ${userClassName}`.trim();

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
    <path d="M14 8h4l-2 8" />
    <path d="M6 8v3a1 1 0 0 0 1 1h3" />
    <path d="M10 8v8" />
  </svg>
  );
};

export default IconNumber47Small;