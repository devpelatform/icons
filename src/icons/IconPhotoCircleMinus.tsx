import React from 'react';

interface IconPhotoCircleMinusProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconPhotoCircleMinus: React.FC<IconPhotoCircleMinusProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-photo-circle-minus ${defaultSize} ${userClassName}`.trim();

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
    <path d="M15 8h.01" />
    <path d="M20.475 15.035a9 9 0 0 0 -8.475 -12.035a9 9 0 0 0 -9 9a9 9 0 0 0 9.525 8.985" />
    <path d="M4 15l4 -4c.928 -.893 2.072 -.893 3 0l4 4" />
    <path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l2 2" />
    <path d="M16 19h6" />
  </svg>
  );
};

export default IconPhotoCircleMinus;