import React from 'react';

interface IconReceiptOffProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconReceiptOff: React.FC<IconReceiptOffProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-receipt-off ${defaultSize} ${userClassName}`.trim();

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
    <path d="M5 21v-16m2 -2h10a2 2 0 0 1 2 2v10m0 4.01v1.99l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2" />
    <path d="M11 7l4 0" />
    <path d="M9 11l2 0" />
    <path d="M13 15l2 0" />
    <path d="M15 11l0 .01" />
    <path d="M3 3l18 18" />
  </svg>
  );
};

export default IconReceiptOff;