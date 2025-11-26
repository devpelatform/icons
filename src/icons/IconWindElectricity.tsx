import React from 'react';

interface IconWindElectricityProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconWindElectricity: React.FC<IconWindElectricityProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-wind-electricity ${defaultSize} ${userClassName}`.trim();

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
    <path d="M20 7l-3 5h4l-3 5" />
    <path d="M3 16h4a2 2 0 1 1 0 4" />
    <path d="M3 12h8a2 2 0 1 0 0 -4" />
    <path d="M3 8h3a2 2 0 1 0 0 -4" />
  </svg>
  );
};

export default IconWindElectricity;