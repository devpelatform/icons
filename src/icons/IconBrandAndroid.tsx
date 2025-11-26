import React from 'react';

interface IconBrandAndroidProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBrandAndroid: React.FC<IconBrandAndroidProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-brand-android ${defaultSize} ${userClassName}`.trim();

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
    <path d="M4 10l0 6" />
    <path d="M20 10l0 6" />
    <path d="M7 9h10v8a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1v-8a5 5 0 0 1 10 0" />
    <path d="M8 3l1 2" />
    <path d="M16 3l-1 2" />
    <path d="M9 18l0 3" />
    <path d="M15 18l0 3" />
  </svg>
  );
};

export default IconBrandAndroid;