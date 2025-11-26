import React from 'react';

interface IconCurrencyDirhamProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconCurrencyDirham: React.FC<IconCurrencyDirhamProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-currency-dirham ${defaultSize} ${userClassName}`.trim();

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
    <path d="M8.5 19h-3.5" />
    <path d="M8.599 16.479a1.5 1.5 0 1 0 -1.099 2.521" />
    <path d="M7 4v9" />
    <path d="M15 13h1.888a1.5 1.5 0 0 0 1.296 -2.256l-2.184 -3.744" />
    <path d="M11 13.01v-.01" />
  </svg>
  );
};

export default IconCurrencyDirham;