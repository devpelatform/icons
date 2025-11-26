import React from 'react';

interface IconDeviceProjectorProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconDeviceProjector: React.FC<IconDeviceProjectorProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-device-projector ${defaultSize} ${userClassName}`.trim();

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
    <path d="M8 9a5 5 0 1 0 10 0a5 5 0 0 0 -10 0" />
    <path d="M9 6h-4a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2 -2v-8a2 2 0 0 0 -2 -2h-2" />
    <path d="M6 15h1" />
    <path d="M7 18l-1 2" />
    <path d="M18 18l1 2" />
  </svg>
  );
};

export default IconDeviceProjector;