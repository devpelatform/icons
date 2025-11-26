import React from 'react';

interface IconClickProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconClick: React.FC<IconClickProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-click ${defaultSize} ${userClassName}`.trim();

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
    <path d="M3 12l3 0" />
    <path d="M12 3l0 3" />
    <path d="M7.8 7.8l-2.2 -2.2" />
    <path d="M16.2 7.8l2.2 -2.2" />
    <path d="M7.8 16.2l-2.2 2.2" />
    <path d="M12 12l9 3l-4 2l-2 4l-3 -9" />
  </svg>
  );
};

export default IconClick;