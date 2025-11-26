import React from 'react';

interface IconCurrencyBitcoinProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconCurrencyBitcoin: React.FC<IconCurrencyBitcoinProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-currency-bitcoin ${defaultSize} ${userClassName}`.trim();

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
    <path d="M6 6h8a3 3 0 0 1 0 6a3 3 0 0 1 0 6h-8" />
    <path d="M8 6l0 12" />
    <path d="M8 12l6 0" />
    <path d="M9 3l0 3" />
    <path d="M13 3l0 3" />
    <path d="M9 18l0 3" />
    <path d="M13 18l0 3" />
  </svg>
  );
};

export default IconCurrencyBitcoin;