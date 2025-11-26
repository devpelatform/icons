import React from 'react';

interface IconBracketsOffProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBracketsOff: React.FC<IconBracketsOffProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-brackets-off ${defaultSize} ${userClassName}`.trim();

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
    <path d="M5 5v15h3" />
    <path d="M16 4h3v11m0 4v1h-3" />
    <path d="M3 3l18 18" />
  </svg>
  );
};

export default IconBracketsOff;