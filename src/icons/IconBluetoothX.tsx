import React from 'react';

interface IconBluetoothXProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBluetoothX: React.FC<IconBluetoothXProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-bluetooth-x ${defaultSize} ${userClassName}`.trim();

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
    <path d="M7 8l10 8l-5 4v-16l1 .802m0 6.396l-6 4.802" />
    <path d="M16 6l4 4" />
    <path d="M20 6l-4 4" />
  </svg>
  );
};

export default IconBluetoothX;