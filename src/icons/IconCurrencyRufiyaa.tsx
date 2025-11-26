import React from 'react';

interface IconCurrencyRufiyaaProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconCurrencyRufiyaa: React.FC<IconCurrencyRufiyaaProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-currency-rufiyaa ${defaultSize} ${userClassName}`.trim();

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
    <path d="M20 16h.01" />
    <path d="M4 16c9.5 -4 11.5 -8 14 -9" />
    <path d="M12 8l5 3" />
  </svg>
  );
};

export default IconCurrencyRufiyaa;