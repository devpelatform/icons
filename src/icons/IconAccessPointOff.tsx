import React from 'react';

interface IconAccessPointOffProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconAccessPointOff: React.FC<IconAccessPointOffProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-access-point-off ${defaultSize} ${userClassName}`.trim();

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
    <path d="M3 3l18 18" />
    <path d="M14.828 9.172a4 4 0 0 1 1.172 2.828" />
    <path d="M17.657 6.343a8 8 0 0 1 1.635 8.952" />
    <path d="M9.168 14.828a4 4 0 0 1 0 -5.656" />
    <path d="M6.337 17.657a8 8 0 0 1 0 -11.314" />
  </svg>
  );
};

export default IconAccessPointOff;