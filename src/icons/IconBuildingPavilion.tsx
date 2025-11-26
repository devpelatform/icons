import React from 'react';

interface IconBuildingPavilionProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBuildingPavilion: React.FC<IconBuildingPavilionProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-building-pavilion ${defaultSize} ${userClassName}`.trim();

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
    <path d="M3 21h7v-3a2 2 0 0 1 4 0v3h7" />
    <path d="M6 21l0 -9" />
    <path d="M18 21l0 -9" />
    <path d="M6 12h12a3 3 0 0 0 3 -3a9 8 0 0 1 -9 -6a9 8 0 0 1 -9 6a3 3 0 0 0 3 3" />
  </svg>
  );
};

export default IconBuildingPavilion;