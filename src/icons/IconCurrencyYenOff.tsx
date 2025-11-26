import React from 'react';

interface IconCurrencyYenOffProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconCurrencyYenOff: React.FC<IconCurrencyYenOffProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-currency-yen-off ${defaultSize} ${userClassName}`.trim();

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
    <path d="M12 19v-7m5 -7l-3.328 4.66" />
    <path d="M8 17h8" />
    <path d="M8 13h5" />
    <path d="M3 3l18 18" />
  </svg>
  );
};

export default IconCurrencyYenOff;