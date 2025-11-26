import React from 'react';

interface IconShadowOffProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconShadowOff: React.FC<IconShadowOffProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-shadow-off ${defaultSize} ${userClassName}`.trim();

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
    <path d="M5.634 5.638a9 9 0 0 0 12.728 12.727m1.68 -2.32a9 9 0 0 0 -12.086 -12.088" />
    <path d="M16 12h2" />
    <path d="M13 15h2" />
    <path d="M13 18h1" />
    <path d="M13 9h4" />
    <path d="M13 6h1" />
    <path d="M3 3l18 18" />
  </svg>
  );
};

export default IconShadowOff;