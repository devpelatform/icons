import React from 'react';

interface IconBuildingAirportProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBuildingAirport: React.FC<IconBuildingAirportProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-building-airport ${defaultSize} ${userClassName}`.trim();

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
    <path d="M3.59 7h8.82a1 1 0 0 1 .902 1.433l-1.44 3a1 1 0 0 1 -.901 .567h-5.942a1 1 0 0 1 -.901 -.567l-1.44 -3a1 1 0 0 1 .901 -1.433" />
    <path d="M6 7l-.78 -2.342a.5 .5 0 0 1 .473 -.658h4.612a.5 .5 0 0 1 .475 .658l-.78 2.342" />
    <path d="M8 2v2" />
    <path d="M6 12v9h4v-9" />
    <path d="M3 21h18" />
    <path d="M22 5h-6l-1 -1" />
    <path d="M18 3l2 2l-2 2" />
    <path d="M10 17h7a2 2 0 0 1 2 2v2" />
  </svg>
  );
};

export default IconBuildingAirport;