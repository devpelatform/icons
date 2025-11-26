import React from 'react';

interface IconSunglassesProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconSunglasses: React.FC<IconSunglassesProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-sunglasses ${defaultSize} ${userClassName}`.trim();

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
    <path d="M8 4h-2l-3 10" />
    <path d="M16 4h2l3 10" />
    <path d="M10 16h4" />
    <path d="M21 16.5a3.5 3.5 0 0 1 -7 0v-2.5h7v2.5" />
    <path d="M10 16.5a3.5 3.5 0 0 1 -7 0v-2.5h7v2.5" />
    <path d="M4 14l4.5 4.5" />
    <path d="M15 14l4.5 4.5" />
  </svg>
  );
};

export default IconSunglasses;