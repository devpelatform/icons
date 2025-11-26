import React from 'react';

interface IconBrandStackoverflowProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBrandStackoverflow: React.FC<IconBrandStackoverflowProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-brand-stackoverflow ${defaultSize} ${userClassName}`.trim();

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
    <path d="M4 17v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-1" />
    <path d="M8 16h8" />
    <path d="M8.322 12.582l7.956 .836" />
    <path d="M8.787 9.168l7.826 1.664" />
    <path d="M10.096 5.764l7.608 2.472" />
  </svg>
  );
};

export default IconBrandStackoverflow;