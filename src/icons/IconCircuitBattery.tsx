import React from 'react';

interface IconCircuitBatteryProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconCircuitBattery: React.FC<IconCircuitBatteryProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-circuit-battery ${defaultSize} ${userClassName}`.trim();

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
    <path d="M2 12h4" />
    <path d="M18 12h4" />
    <path d="M18 5v14" />
    <path d="M14 9v6" />
    <path d="M10 5v14" />
    <path d="M6 9v6" />
  </svg>
  );
};

export default IconCircuitBattery;