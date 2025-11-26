import React from 'react';

interface IconLayersDifferenceProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconLayersDifference: React.FC<IconLayersDifferenceProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-layers-difference ${defaultSize} ${userClassName}`.trim();

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
    <path d="M16 16v2a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-8a2 2 0 0 1 2 -2h2v-2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-2" />
    <path d="M10 8l-2 0l0 2" />
    <path d="M8 14l0 2l2 0" />
    <path d="M14 8l2 0l0 2" />
    <path d="M16 14l0 2l-2 0" />
  </svg>
  );
};

export default IconLayersDifference;