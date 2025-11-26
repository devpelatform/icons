import React from 'react';

interface IconRainbowOffProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconRainbowOff: React.FC<IconRainbowOffProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-rainbow-off ${defaultSize} ${userClassName}`.trim();

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
    <path d="M22 17c0 -5.523 -4.477 -10 -10 -10c-.308 0 -.613 .014 -.914 .041m-3.208 .845a10 10 0 0 0 -5.878 9.114" />
    <path d="M11.088 11.069a6 6 0 0 0 -5.088 5.931" />
    <path d="M14 17a2 2 0 1 0 -4 0" />
    <path d="M3 3l18 18" />
  </svg>
  );
};

export default IconRainbowOff;