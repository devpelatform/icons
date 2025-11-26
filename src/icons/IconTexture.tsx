import React from 'react';

interface IconTextureProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconTexture: React.FC<IconTextureProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-texture ${defaultSize} ${userClassName}`.trim();

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
    <path d="M6 3l-3 3" />
    <path d="M21 18l-3 3" />
    <path d="M11 3l-8 8" />
    <path d="M16 3l-13 13" />
    <path d="M21 3l-18 18" />
    <path d="M21 8l-13 13" />
    <path d="M21 13l-8 8" />
  </svg>
  );
};

export default IconTexture;