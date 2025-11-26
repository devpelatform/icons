import React from 'react';

interface IconTextDirectionLtrProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconTextDirectionLtr: React.FC<IconTextDirectionLtrProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-text-direction-ltr ${defaultSize} ${userClassName}`.trim();

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
    <path d="M5 19h14" />
    <path d="M17 21l2 -2l-2 -2" />
    <path d="M16 4h-6.5a3.5 3.5 0 0 0 0 7h.5" />
    <path d="M14 15v-11" />
    <path d="M10 15v-11" />
  </svg>
  );
};

export default IconTextDirectionLtr;