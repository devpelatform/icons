import React from 'react';

interface IconBuildingCommunityProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBuildingCommunity: React.FC<IconBuildingCommunityProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-building-community ${defaultSize} ${userClassName}`.trim();

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
    <path d="M8 9l5 5v7h-5v-4m0 4h-5v-7l5 -5m1 1v-6a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v17h-8" />
    <path d="M13 7l0 .01" />
    <path d="M17 7l0 .01" />
    <path d="M17 11l0 .01" />
    <path d="M17 15l0 .01" />
  </svg>
  );
};

export default IconBuildingCommunity;