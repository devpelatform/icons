import React from 'react';

interface IconSteeringWheelOffProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconSteeringWheelOff: React.FC<IconSteeringWheelOffProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-steering-wheel-off ${defaultSize} ${userClassName}`.trim();

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
    <path d="M20.04 16.048a9 9 0 0 0 -12.083 -12.09m-2.32 1.678a9 9 0 1 0 12.737 12.719" />
    <path d="M10.595 10.576a2 2 0 1 0 2.827 2.83" />
    <path d="M12 14v7" />
    <path d="M10 12l-6.75 -2" />
    <path d="M15.542 11.543l5.208 -1.543" />
    <path d="M3 3l18 18" />
  </svg>
  );
};

export default IconSteeringWheelOff;