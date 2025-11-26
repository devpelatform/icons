import React from 'react';

interface IconCurrencyLariProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconCurrencyLari: React.FC<IconCurrencyLariProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-currency-lari ${defaultSize} ${userClassName}`.trim();

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
    <path d="M18 13a6 6 0 1 0 -6 6" />
    <path d="M6 19h12" />
    <path d="M10 5v7" />
    <path d="M14 12v-7" />
  </svg>
  );
};

export default IconCurrencyLari;