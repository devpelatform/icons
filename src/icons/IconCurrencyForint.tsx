import React from 'react';

interface IconCurrencyForintProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconCurrencyForint: React.FC<IconCurrencyForintProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-currency-forint ${defaultSize} ${userClassName}`.trim();

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
    <path d="M11 4h-4a3 3 0 0 0 -3 3v12" />
    <path d="M10 11h-6" />
    <path d="M16 4v13a2 2 0 0 0 2 2h2" />
    <path d="M19 9h-5" />
  </svg>
  );
};

export default IconCurrencyForint;