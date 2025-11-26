import React from 'react';

interface IconBuildingBurjAlArabProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBuildingBurjAlArab: React.FC<IconBuildingBurjAlArabProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-building-burj-al-arab ${defaultSize} ${userClassName}`.trim();

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
    <path d="M3 21h18" />
    <path d="M7 21v-18" />
    <path d="M7 4c5.675 .908 10 5.613 10 11.28a11 11 0 0 1 -1.605 5.72" />
    <path d="M5 9h12" />
    <path d="M7 13h4" />
    <path d="M7 17h4" />
  </svg>
  );
};

export default IconBuildingBurjAlArab;