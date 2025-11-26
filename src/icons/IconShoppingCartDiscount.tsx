import React from 'react';

interface IconShoppingCartDiscountProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconShoppingCartDiscount: React.FC<IconShoppingCartDiscountProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-shopping-cart-discount ${defaultSize} ${userClassName}`.trim();

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
    <path d="M12.5 17h-6.5v-14h-2" />
    <path d="M6 5l14 1l-.859 6.011m-6.141 .989h-7" />
    <path d="M16 21l5 -5" />
    <path d="M21 21v.01" />
    <path d="M16 16v.01" />
  </svg>
  );
};

export default IconShoppingCartDiscount;