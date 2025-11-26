import React from 'react';

interface IconStack3Props {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconStack3: React.FC<IconStack3Props> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-stack-3 ${defaultSize} ${userClassName}`.trim();

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
    <path d="M12 2l-8 4l8 4l8 -4l-8 -4" />
    <path d="M4 10l8 4l8 -4" />
    <path d="M4 18l8 4l8 -4" />
    <path d="M4 14l8 4l8 -4" />
  </svg>
  );
};

export default IconStack3;