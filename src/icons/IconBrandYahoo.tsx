import React from 'react';

interface IconBrandYahooProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBrandYahoo: React.FC<IconBrandYahooProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-brand-yahoo ${defaultSize} ${userClassName}`.trim();

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
    <path d="M3 6l5 0" />
    <path d="M7 18l7 0" />
    <path d="M4.5 6l5.5 7v5" />
    <path d="M10 13l6 -5" />
    <path d="M12.5 8l5 0" />
    <path d="M20 11l0 4" />
    <path d="M20 18l0 .01" />
  </svg>
  );
};

export default IconBrandYahoo;