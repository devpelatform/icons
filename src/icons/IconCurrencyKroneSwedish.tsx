import React from 'react';

interface IconCurrencyKroneSwedishProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconCurrencyKroneSwedish: React.FC<IconCurrencyKroneSwedishProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-currency-krone-swedish ${defaultSize} ${userClassName}`.trim();

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
    <path d="M5 6v12" />
    <path d="M5 12c3.5 0 6 -3 6 -6" />
    <path d="M5 12c3.5 0 6 3 6 6" />
    <path d="M15 10v8" />
    <path d="M19 10a4 4 0 0 0 -4 4" />
  </svg>
  );
};

export default IconCurrencyKroneSwedish;