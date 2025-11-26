import React from 'react';

interface IconTrafficConeOffProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconTrafficConeOff: React.FC<IconTrafficConeOffProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-traffic-cone-off ${defaultSize} ${userClassName}`.trim();

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
    <path d="M4 20h16" />
    <path d="M9.4 10h.6m4 0h.6" />
    <path d="M7.8 15h7.2" />
    <path d="M6 20l3.5 -10.5" />
    <path d="M10.5 6.5l.5 -1.5h2l2 6m2 6l1 3" />
    <path d="M3 3l18 18" />
  </svg>
  );
};

export default IconTrafficConeOff;