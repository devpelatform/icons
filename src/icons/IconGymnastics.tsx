import React from 'react';

interface IconGymnasticsProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconGymnastics: React.FC<IconGymnasticsProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-gymnastics ${defaultSize} ${userClassName}`.trim();

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
    <path d="M7 7a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
    <path d="M13 21l1 -9l7 -6" />
    <path d="M3 11h6l5 1" />
    <path d="M11.5 8.5l4.5 -3.5" />
  </svg>
  );
};

export default IconGymnastics;