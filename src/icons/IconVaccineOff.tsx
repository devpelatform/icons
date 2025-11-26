import React from 'react';

interface IconVaccineOffProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconVaccineOff: React.FC<IconVaccineOffProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-vaccine-off ${defaultSize} ${userClassName}`.trim();

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
    <path d="M17 3l4 4" />
    <path d="M19 5l-4.5 4.5" />
    <path d="M11.5 6.5l6 6" />
    <path d="M16.5 11.5l-.5 .5m-2 2l-4 4h-4v-4l4 -4m2 -2l.5 -.5" />
    <path d="M7.5 12.5l1.5 1.5" />
    <path d="M3 21l3 -3" />
    <path d="M3 3l18 18" />
  </svg>
  );
};

export default IconVaccineOff;