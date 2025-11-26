import React from 'react';

interface IconChairDirectorProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconChairDirector: React.FC<IconChairDirectorProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-chair-director ${defaultSize} ${userClassName}`.trim();

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
    <path d="M6 21l12 -9" />
    <path d="M6 12l12 9" />
    <path d="M5 12h14" />
    <path d="M6 3v9" />
    <path d="M18 3v9" />
    <path d="M6 8h12" />
    <path d="M6 5h12" />
  </svg>
  );
};

export default IconChairDirector;