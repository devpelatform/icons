import React from 'react';

interface IconTrafficConeProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconTrafficCone: React.FC<IconTrafficConeProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-traffic-cone ${defaultSize} ${userClassName}`.trim();

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
    <path d="M4 20l16 0" />
    <path d="M9.4 10l5.2 0" />
    <path d="M7.8 15l8.4 0" />
    <path d="M6 20l5 -15h2l5 15" />
  </svg>
  );
};

export default IconTrafficCone;