import React from 'react';

interface IconCurrencyRupeeProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconCurrencyRupee: React.FC<IconCurrencyRupeeProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-currency-rupee ${defaultSize} ${userClassName}`.trim();

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
    <path d="M18 5h-11h3a4 4 0 0 1 0 8h-3l6 6" />
    <path d="M7 9l11 0" />
  </svg>
  );
};

export default IconCurrencyRupee;