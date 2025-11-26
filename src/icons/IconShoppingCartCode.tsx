import React from 'react';

interface IconShoppingCartCodeProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconShoppingCartCode: React.FC<IconShoppingCartCodeProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-shopping-cart-code ${defaultSize} ${userClassName}`.trim();

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
    <path d="M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
    <path d="M11.5 17h-5.5v-14h-2" />
    <path d="M6 5l14 1l-1 7h-13" />
    <path d="M20 21l2 -2l-2 -2" />
    <path d="M17 17l-2 2l2 2" />
  </svg>
  );
};

export default IconShoppingCartCode;