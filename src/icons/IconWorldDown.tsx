import React from 'react';

interface IconWorldDownProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconWorldDown: React.FC<IconWorldDownProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-world-down ${defaultSize} ${userClassName}`.trim();

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
    <path d="M20.986 12.509a9 9 0 1 0 -8.455 8.476" />
    <path d="M3.6 9h16.8" />
    <path d="M3.6 15h10.9" />
    <path d="M11.5 3a17 17 0 0 0 0 18" />
    <path d="M12.5 3c2.313 3.706 3.07 7.857 2.27 12" />
    <path d="M19 16v6" />
    <path d="M22 19l-3 3l-3 -3" />
  </svg>
  );
};

export default IconWorldDown;