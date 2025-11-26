import React from 'react';

interface IconRadiusTopLeftProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconRadiusTopLeft: React.FC<IconRadiusTopLeftProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-radius-top-left ${defaultSize} ${userClassName}`.trim();

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
    <path d="M5 19v-6a8 8 0 0 1 8 -8h6" />
  </svg>
  );
};

export default IconRadiusTopLeft;