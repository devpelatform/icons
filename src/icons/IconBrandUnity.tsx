import React from 'react';

interface IconBrandUnityProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBrandUnity: React.FC<IconBrandUnityProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-brand-unity ${defaultSize} ${userClassName}`.trim();

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
    <path d="M14 3l6 4v7" />
    <path d="M18 17l-6 4l-6 -4" />
    <path d="M4 14v-7l6 -4" />
    <path d="M4 7l8 5v9" />
    <path d="M20 7l-8 5" />
  </svg>
  );
};

export default IconBrandUnity;