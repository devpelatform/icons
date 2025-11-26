import React from 'react';

interface IconBuildingCircusProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBuildingCircus: React.FC<IconBuildingCircusProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-building-circus ${defaultSize} ${userClassName}`.trim();

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
    <path d="M4 11h16" />
    <path d="M12 6.5c0 1 -5 4.5 -8 4.5" />
    <path d="M12 6.5c0 1 5 4.5 8 4.5" />
    <path d="M6 11c-.333 5.333 -1 8.667 -2 10h4c1 0 4 -4 4 -9v-1" />
    <path d="M18 11c.333 5.333 1 8.667 2 10h-4c-1 0 -4 -4 -4 -9v-1" />
    <path d="M12 7v-4l2 1h-2" />
  </svg>
  );
};

export default IconBuildingCircus;