import React from 'react';

interface IconAspectRatioOffProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconAspectRatioOff: React.FC<IconAspectRatioOffProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-aspect-ratio-off ${defaultSize} ${userClassName}`.trim();

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
    <path d="M9 5h10a2 2 0 0 1 2 2v10m-2 2h-14a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2" />
    <path d="M7 12v-3h2" />
    <path d="M17 12v1m-2 2h-1" />
    <path d="M3 3l18 18" />
  </svg>
  );
};

export default IconAspectRatioOff;