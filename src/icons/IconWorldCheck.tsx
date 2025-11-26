import React from 'react';

interface IconWorldCheckProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconWorldCheck: React.FC<IconWorldCheckProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-world-check ${defaultSize} ${userClassName}`.trim();

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
    <path d="M20.946 12.99a9 9 0 1 0 -9.46 7.995" />
    <path d="M3.6 9h16.8" />
    <path d="M3.6 15h13.9" />
    <path d="M11.5 3a17 17 0 0 0 0 18" />
    <path d="M12.5 3a16.997 16.997 0 0 1 2.311 12.001" />
    <path d="M15 19l2 2l4 -4" />
  </svg>
  );
};

export default IconWorldCheck;