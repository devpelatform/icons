import React from 'react';

interface IconBrandVueProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBrandVue: React.FC<IconBrandVueProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-brand-vue ${defaultSize} ${userClassName}`.trim();

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
    <path d="M16.5 4l-4.5 8l-4.5 -8" />
    <path d="M3 4l9 16l9 -16" />
  </svg>
  );
};

export default IconBrandVue;