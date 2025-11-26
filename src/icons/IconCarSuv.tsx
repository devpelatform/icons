import React from 'react';

interface IconCarSuvProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconCarSuv: React.FC<IconCarSuvProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-car-suv ${defaultSize} ${userClassName}`.trim();

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
    <path d="M5 17a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
    <path d="M16 17a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
    <path d="M5 9l2 -4h7.438a2 2 0 0 1 1.94 1.515l.622 2.485h3a2 2 0 0 1 2 2v3" />
    <path d="M10 9v-4" />
    <path d="M2 7v4" />
    <path d="M22.001 14.001a4.992 4.992 0 0 0 -4.001 -2.001a4.992 4.992 0 0 0 -4 2h-3a4.998 4.998 0 0 0 -8.003 .003" />
    <path d="M5 12v-3h13" />
  </svg>
  );
};

export default IconCarSuv;