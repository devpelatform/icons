import React from 'react';

interface IconTimeDuration45Props {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconTimeDuration45: React.FC<IconTimeDuration45Props> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-time-duration-45 ${defaultSize} ${userClassName}`.trim();

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
    <path d="M13 15h2a1 1 0 0 0 1 -1v-1a1 1 0 0 0 -1 -1h-2v-3h3" />
    <path d="M7 9v2a1 1 0 0 0 1 1h1" />
    <path d="M10 9v6" />
    <path d="M7.5 4.2v.01" />
    <path d="M4.2 7.5v.01" />
    <path d="M3 12a9 9 0 1 0 9 -9" />
  </svg>
  );
};

export default IconTimeDuration45;