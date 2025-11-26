import React from 'react';

interface IconBrandDiggProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBrandDigg: React.FC<IconBrandDiggProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-brand-digg ${defaultSize} ${userClassName}`.trim();

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
    <path d="M6 15h-3v-4h3" />
    <path d="M15 15h-3v-4h3" />
    <path d="M9 15v-4" />
    <path d="M15 11v7h-3" />
    <path d="M6 7v8" />
    <path d="M21 15h-3v-4h3" />
    <path d="M21 11v7h-3" />
  </svg>
  );
};

export default IconBrandDigg;