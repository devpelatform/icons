import React from 'react';

interface IconStackFrontProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconStackFront: React.FC<IconStackFrontProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-stack-front ${defaultSize} ${userClassName}`.trim();

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
    <path d="M12 4l-8 4l8 4l8 -4l-8 -4" fill="currentColor" />
    <path d="M8 14l-4 2l8 4l8 -4l-4 -2" />
    <path d="M8 10l-4 2l8 4l8 -4l-4 -2" />
  </svg>
  );
};

export default IconStackFront;