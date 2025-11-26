import React from 'react';

interface IconCurrencyEuroProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconCurrencyEuro: React.FC<IconCurrencyEuroProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-currency-euro ${defaultSize} ${userClassName}`.trim();

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
    <path d="M17.2 7a6 7 0 1 0 0 10" />
    <path d="M13 10h-8m0 4h8" />
  </svg>
  );
};

export default IconCurrencyEuro;