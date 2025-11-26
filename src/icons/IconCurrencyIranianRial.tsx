import React from 'react';

interface IconCurrencyIranianRialProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconCurrencyIranianRial: React.FC<IconCurrencyIranianRialProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-currency-iranian-rial ${defaultSize} ${userClassName}`.trim();

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
    <path d="M9 4v9a2 2 0 0 1 -2 2h-1a3 3 0 0 1 -3 -3v-1" />
    <path d="M12 5v8a1 1 0 0 0 1 1h1a2 2 0 0 0 2 -2v-1" />
    <path d="M21 14v1.096a5 5 0 0 1 -3.787 4.85l-.213 .054" />
    <path d="M11 18h.01" />
    <path d="M14 18h.01" />
  </svg>
  );
};

export default IconCurrencyIranianRial;