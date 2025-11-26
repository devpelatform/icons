import React from 'react';

interface IconBrandLoomProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBrandLoom: React.FC<IconBrandLoomProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-brand-loom ${defaultSize} ${userClassName}`.trim();

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
    <path d="M17.464 6.518a6 6 0 1 0 -3.023 7.965" />
    <path d="M17.482 17.464a6 6 0 1 0 -7.965 -3.023" />
    <path d="M6.54 17.482a6 6 0 1 0 3.024 -7.965" />
    <path d="M6.518 6.54a6 6 0 1 0 7.965 3.024" />
  </svg>
  );
};

export default IconBrandLoom;