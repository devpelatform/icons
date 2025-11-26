import React from 'react';

interface IconBrandZapierProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBrandZapier: React.FC<IconBrandZapierProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-brand-zapier ${defaultSize} ${userClassName}`.trim();

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
    <path d="M3 12h6" />
    <path d="M21 12h-6" />
    <path d="M12 3v6" />
    <path d="M12 15v6" />
    <path d="M5.636 5.636l4.243 4.243" />
    <path d="M18.364 18.364l-4.243 -4.243" />
    <path d="M18.364 5.636l-4.243 4.243" />
    <path d="M9.879 14.121l-4.243 4.243" />
  </svg>
  );
};

export default IconBrandZapier;