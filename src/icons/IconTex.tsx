import React from 'react';

interface IconTexProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconTex: React.FC<IconTexProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-tex ${defaultSize} ${userClassName}`.trim();

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
    <path d="M9 8v-1h-6v1" />
    <path d="M6 15v-8" />
    <path d="M21 15l-5 -8" />
    <path d="M16 15l5 -8" />
    <path d="M14 11h-4v8h4" />
    <path d="M10 15h3" />
  </svg>
  );
};

export default IconTex;