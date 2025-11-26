import React from 'react';

interface IconArrowsTransferUpDownProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconArrowsTransferUpDown: React.FC<IconArrowsTransferUpDownProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-arrows-transfer-up-down ${defaultSize} ${userClassName}`.trim();

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
    <path d="M7 21v-6" />
    <path d="M20 6l-3 -3l-3 3" />
    <path d="M10 18l-3 3l-3 -3" />
    <path d="M7 3v2" />
    <path d="M7 9v2" />
    <path d="M17 3v6" />
    <path d="M17 21v-2" />
    <path d="M17 15v-2" />
  </svg>
  );
};

export default IconArrowsTransferUpDown;