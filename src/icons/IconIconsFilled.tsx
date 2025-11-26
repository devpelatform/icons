import React from 'react';

interface IconIconsFilledProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconIconsFilled: React.FC<IconIconsFilledProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-icons-filled ${defaultSize} ${userClassName}`.trim();

  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
   className={finalClassName} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path d="M4.25 2.603a4.5 4.5 0 1 1 -2.25 3.897l.006 -.229a4.5 4.5 0 0 1 2.244 -3.668" />
    <path d="M5.632 13.504a1 1 0 0 1 1.736 0l4 7a1 1 0 0 1 -.868 1.496h-8a1 1 0 0 1 -.868 -1.496z" />
    <path d="M13.293 2.293a1 1 0 0 1 1.414 0l7 7a1 1 0 1 1 -1.414 1.414l-7 -7a1 1 0 0 1 0 -1.414" />
    <path d="M20.293 2.293a1 1 0 0 1 1.414 1.414l-7 7a1 1 0 0 1 -1.414 -1.414z" />
    <path d="M21 13a1 1 0 0 1 1 1v7a1 1 0 0 1 -1 1h-7a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1z" />
  </svg>
  );
};

export default IconIconsFilled;