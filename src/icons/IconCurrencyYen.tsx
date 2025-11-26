import React from 'react';

interface IconCurrencyYenProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconCurrencyYen: React.FC<IconCurrencyYenProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-currency-yen ${defaultSize} ${userClassName}`.trim();

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
    <path d="M12 19v-7l-5 -7m10 0l-5 7" />
    <path d="M8 17l8 0" />
    <path d="M8 13l8 0" />
  </svg>
  );
};

export default IconCurrencyYen;