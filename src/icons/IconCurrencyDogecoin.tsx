import React from 'react';

interface IconCurrencyDogecoinProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconCurrencyDogecoin: React.FC<IconCurrencyDogecoinProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-currency-dogecoin ${defaultSize} ${userClassName}`.trim();

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
    <path d="M6 12h6" />
    <path d="M9 6v12" />
    <path d="M6 18h6a6 6 0 1 0 0 -12h-6" />
  </svg>
  );
};

export default IconCurrencyDogecoin;