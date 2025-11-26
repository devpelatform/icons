import React from 'react';

interface IconPlanetOffProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconPlanetOff: React.FC<IconPlanetOffProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-planet-off ${defaultSize} ${userClassName}`.trim();

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
    <path d="M18.816 13.58c1.956 1.825 3.157 3.449 3.184 4.445m-3.428 .593c-2.098 -.634 -4.944 -2.03 -7.919 -3.976c-5.47 -3.579 -9.304 -7.664 -8.56 -9.123c.32 -.628 1.591 -.6 3.294 -.113" />
    <path d="M7.042 7.059a7 7 0 0 0 9.908 9.89m1.581 -2.425a7 7 0 0 0 -9.057 -9.054" />
    <path d="M3 3l18 18" />
  </svg>
  );
};

export default IconPlanetOff;