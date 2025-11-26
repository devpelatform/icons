import React from 'react';

interface IconCurrencyPesoProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconCurrencyPeso: React.FC<IconCurrencyPesoProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-currency-peso ${defaultSize} ${userClassName}`.trim();

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
    <path d="M8 19v-14h3.5a4.5 4.5 0 1 1 0 9h-3.5" />
    <path d="M18 8h-12" />
    <path d="M18 11h-12" />
  </svg>
  );
};

export default IconCurrencyPeso;