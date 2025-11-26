import React from 'react';

interface IconBuildingMonumentProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBuildingMonument: React.FC<IconBuildingMonumentProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-building-monument ${defaultSize} ${userClassName}`.trim();

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
    <path d="M8 18l2 -13l2 -2l2 2l2 13" />
    <path d="M5 21v-3h14v3" />
    <path d="M3 21l18 0" />
  </svg>
  );
};

export default IconBuildingMonument;