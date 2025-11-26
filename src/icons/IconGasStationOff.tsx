import React from 'react';

interface IconGasStationOffProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconGasStationOff: React.FC<IconGasStationOffProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-gas-station-off ${defaultSize} ${userClassName}`.trim();

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
    <path d="M15 11a2 2 0 0 1 2 2m3 3v-7l-3 -3" />
    <path d="M4 20v-14c0 -.548 .22 -1.044 .577 -1.405m3.423 -.595h4a2 2 0 0 1 2 2v4m0 4v6" />
    <path d="M3 20h12" />
    <path d="M18 7v1a1 1 0 0 0 1 1h1" />
    <path d="M4 11h7" />
    <path d="M3 3l18 18" />
  </svg>
  );
};

export default IconGasStationOff;