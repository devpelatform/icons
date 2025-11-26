import React from 'react';

interface IconCurrencyRupeeNepaleseProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconCurrencyRupeeNepalese: React.FC<IconCurrencyRupeeNepaleseProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-currency-rupee-nepalese ${defaultSize} ${userClassName}`.trim();

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
    <path d="M15 5h-11h3a4 4 0 1 1 0 8h-3l6 6" />
    <path d="M21 17l-4.586 -4.414a2 2 0 0 0 -2.828 2.828l.707 .707" />
  </svg>
  );
};

export default IconCurrencyRupeeNepalese;