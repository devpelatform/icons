import React from 'react';

interface IconNumber14SmallProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconNumber14Small: React.FC<IconNumber14SmallProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-number-14-small ${defaultSize} ${userClassName}`.trim();

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
    <path d="M8 8h1v8" />
    <path d="M13 8v3a1 1 0 0 0 1 1h3" />
    <path d="M17 8v8" />
  </svg>
  );
};

export default IconNumber14Small;