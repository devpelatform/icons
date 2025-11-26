import React from 'react';

interface IconShoppingCartBoltProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconShoppingCartBolt: React.FC<IconShoppingCartBoltProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-shopping-cart-bolt ${defaultSize} ${userClassName}`.trim();

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
    <path d="M13.5 17h-7.5v-14h-2" />
    <path d="M6 5l14 1l-.858 6.004m-2.642 .996h-10.5" />
    <path d="M19 16l-2 3h4l-2 3" />
  </svg>
  );
};

export default IconShoppingCartBolt;