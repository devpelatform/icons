import React from 'react';

interface IconStackPushProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconStackPush: React.FC<IconStackPushProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-stack-push ${defaultSize} ${userClassName}`.trim();

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
    <path d="M6 10l-2 1l8 4l8 -4l-2 -1" />
    <path d="M4 15l8 4l8 -4" />
    <path d="M12 4v7" />
    <path d="M15 8l-3 3l-3 -3" />
  </svg>
  );
};

export default IconStackPush;