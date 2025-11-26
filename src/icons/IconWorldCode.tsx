import React from 'react';

interface IconWorldCodeProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconWorldCode: React.FC<IconWorldCodeProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-world-code ${defaultSize} ${userClassName}`.trim();

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
    <path d="M20.942 13.02a9 9 0 1 0 -9.47 7.964" />
    <path d="M3.6 9h16.8" />
    <path d="M3.6 15h9.9" />
    <path d="M11.5 3a17 17 0 0 0 0 18" />
    <path d="M12.5 3c2 3.206 2.837 6.913 2.508 10.537" />
    <path d="M20 21l2 -2l-2 -2" />
    <path d="M17 17l-2 2l2 2" />
  </svg>
  );
};

export default IconWorldCode;