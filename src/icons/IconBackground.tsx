import React from 'react';

interface IconBackgroundProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBackground: React.FC<IconBackgroundProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-background ${defaultSize} ${userClassName}`.trim();

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
    <path d="M4 8l4 -4" />
    <path d="M14 4l-10 10" />
    <path d="M4 20l16 -16" />
    <path d="M20 10l-10 10" />
    <path d="M20 16l-4 4" />
  </svg>
  );
};

export default IconBackground;