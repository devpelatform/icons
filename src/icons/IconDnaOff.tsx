import React from 'react';

interface IconDnaOffProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconDnaOff: React.FC<IconDnaOffProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-dna-off ${defaultSize} ${userClassName}`.trim();

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
    <path d="M16 12a3.898 3.898 0 0 0 -1.172 -2.828a4.027 4.027 0 0 0 -2.828 -1.172m-2.828 1.172a4 4 0 1 0 5.656 5.656" />
    <path d="M9.172 20.485a4 4 0 1 0 -5.657 -5.657" />
    <path d="M14.828 3.515a4 4 0 1 0 5.657 5.657" />
    <path d="M3 3l18 18" />
  </svg>
  );
};

export default IconDnaOff;