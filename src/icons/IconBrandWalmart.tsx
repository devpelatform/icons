import React from 'react';

interface IconBrandWalmartProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBrandWalmart: React.FC<IconBrandWalmartProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-brand-walmart ${defaultSize} ${userClassName}`.trim();

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
    <path d="M12 8.04v-5.04" />
    <path d="M15.5 10l4.5 -2.5" />
    <path d="M15.5 14l4.5 2.5" />
    <path d="M12 15.96v5.04" />
    <path d="M8.5 14l-4.5 2.5" />
    <path d="M8.5 10l-4.5 -2.505" />
  </svg>
  );
};

export default IconBrandWalmart;