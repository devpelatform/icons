import React from 'react';

interface IconCarGarageProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconCarGarage: React.FC<IconCarGarageProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-car-garage ${defaultSize} ${userClassName}`.trim();

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
    <path d="M5 20a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
    <path d="M15 20a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
    <path d="M5 20h-2v-6l2 -5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5" />
    <path d="M3 6l9 -4l9 4" />
  </svg>
  );
};

export default IconCarGarage;