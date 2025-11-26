import React from 'react';

interface IconStackPopProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconStackPop: React.FC<IconStackPopProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-stack-pop ${defaultSize} ${userClassName}`.trim();

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
    <path d="M7 9.5l-3 1.5l8 4l8 -4l-3 -1.5" />
    <path d="M4 15l8 4l8 -4" />
    <path d="M12 11v-7" />
    <path d="M9 7l3 -3l3 3" />
  </svg>
  );
};

export default IconStackPop;