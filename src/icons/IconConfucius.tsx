import React from 'react';

interface IconConfuciusProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconConfucius: React.FC<IconConfuciusProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-confucius ${defaultSize} ${userClassName}`.trim();

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
    <path d="M9 19l3 2v-18" />
    <path d="M4 10l8 -2" />
    <path d="M4 18l8 -10" />
    <path d="M20 18l-8 -8l8 -4" />
  </svg>
  );
};

export default IconConfucius;