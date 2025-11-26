import React from 'react';

interface IconCurrencyLiraProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconCurrencyLira: React.FC<IconCurrencyLiraProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-currency-lira ${defaultSize} ${userClassName}`.trim();

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
    <path d="M10 5v15a7 7 0 0 0 7 -7" />
    <path d="M6 15l8 -4" />
    <path d="M14 7l-8 4" />
  </svg>
  );
};

export default IconCurrencyLira;