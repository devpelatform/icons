import React from 'react';

interface IconCurrencyBahrainiProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconCurrencyBahraini: React.FC<IconCurrencyBahrainiProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-currency-bahraini ${defaultSize} ${userClassName}`.trim();

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
    <path d="M3 10v1a4 4 0 0 0 4 4h2a2 2 0 0 0 2 -2v-3" />
    <path d="M7 19.01v-.01" />
    <path d="M14 15.01v-.01" />
    <path d="M17 15h2a2 2 0 0 0 1.649 -3.131l-2.653 -3.869" />
  </svg>
  );
};

export default IconCurrencyBahraini;