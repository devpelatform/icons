import React from 'react';

interface IconTypographyOffProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconTypographyOff: React.FC<IconTypographyOffProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-typography-off ${defaultSize} ${userClassName}`.trim();

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
    <path d="M4 20h3" />
    <path d="M14 20h6" />
    <path d="M6.9 15h6.9" />
    <path d="M13 13l3 7" />
    <path d="M5 20l4.09 -10.906" />
    <path d="M10.181 6.183l.819 -2.183h2l3.904 8.924" />
    <path d="M3 3l18 18" />
  </svg>
  );
};

export default IconTypographyOff;