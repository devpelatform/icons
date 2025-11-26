import React from 'react';

interface IconBorderStyle2Props {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBorderStyle2: React.FC<IconBorderStyle2Props> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-border-style-2 ${defaultSize} ${userClassName}`.trim();

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
    <path d="M4 18v.01" />
    <path d="M8 18v.01" />
    <path d="M12 18v.01" />
    <path d="M16 18v.01" />
    <path d="M20 18v.01" />
    <path d="M18 12h2" />
    <path d="M11 12h2" />
    <path d="M4 12h2" />
    <path d="M4 6h16" />
  </svg>
  );
};

export default IconBorderStyle2;