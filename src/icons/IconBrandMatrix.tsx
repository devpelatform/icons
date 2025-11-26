import React from 'react';

interface IconBrandMatrixProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBrandMatrix: React.FC<IconBrandMatrixProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-brand-matrix ${defaultSize} ${userClassName}`.trim();

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
    <path d="M4 3h-1v18h1" />
    <path d="M20 21h1v-18h-1" />
    <path d="M7 9v6" />
    <path d="M12 15v-3.5a2.5 2.5 0 1 0 -5 0v.5" />
    <path d="M17 15v-3.5a2.5 2.5 0 1 0 -5 0v.5" />
  </svg>
  );
};

export default IconBrandMatrix;