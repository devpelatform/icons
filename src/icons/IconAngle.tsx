import React from 'react';

interface IconAngleProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconAngle: React.FC<IconAngleProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-angle ${defaultSize} ${userClassName}`.trim();

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
    <path d="M21 19h-18l9 -15" />
    <path d="M20.615 15.171h.015" />
    <path d="M19.515 11.771h.015" />
    <path d="M17.715 8.671h.015" />
    <path d="M15.415 5.971h.015" />
  </svg>
  );
};

export default IconAngle;