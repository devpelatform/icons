import React from 'react';

interface IconBoldOffProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBoldOff: React.FC<IconBoldOffProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-bold-off ${defaultSize} ${userClassName}`.trim();

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
    <path d="M9 5h4a3.5 3.5 0 0 1 2.222 6.204m-3.222 .796h-5v-5" />
    <path d="M17.107 17.112a3.5 3.5 0 0 1 -3.107 1.888h-7v-7" />
    <path d="M3 3l18 18" />
  </svg>
  );
};

export default IconBoldOff;