import React from 'react';

interface IconCurrencyRubelProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconCurrencyRubel: React.FC<IconCurrencyRubelProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-currency-rubel ${defaultSize} ${userClassName}`.trim();

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
    <path d="M8 19v-14h6a3 3 0 0 1 0 6h-8" />
    <path d="M14 15h-8" />
  </svg>
  );
};

export default IconCurrencyRubel;