import React from 'react';

interface IconCurrencyRenminbiProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconCurrencyRenminbi: React.FC<IconCurrencyRenminbiProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-currency-renminbi ${defaultSize} ${userClassName}`.trim();

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
    <path d="M15 9v8a2 2 0 1 0 4 0" />
    <path d="M19 9h-14" />
    <path d="M19 5h-14" />
    <path d="M9 9v4c0 2.5 -.667 4 -2 6" />
  </svg>
  );
};

export default IconCurrencyRenminbi;