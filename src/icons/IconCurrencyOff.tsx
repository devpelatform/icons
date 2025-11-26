import React from 'react';

interface IconCurrencyOffProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconCurrencyOff: React.FC<IconCurrencyOffProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-currency-off ${defaultSize} ${userClassName}`.trim();

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
    <path d="M18.531 14.524a7 7 0 0 0 -9.06 -9.053m-2.422 1.582a7 7 0 0 0 9.903 9.896" />
    <path d="M4 4l3 3" />
    <path d="M20 4l-3 3" />
    <path d="M4 20l3 -3" />
    <path d="M20 20l-3 -3" />
    <path d="M3 3l18 18" />
  </svg>
  );
};

export default IconCurrencyOff;