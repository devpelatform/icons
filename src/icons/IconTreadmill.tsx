import React from 'react';

interface IconTreadmillProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconTreadmill: React.FC<IconTreadmillProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-treadmill ${defaultSize} ${userClassName}`.trim();

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
    <path d="M10 3a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
    <path d="M3 14l4 1l.5 -.5" />
    <path d="M12 18v-3l-3 -2.923l.75 -5.077" />
    <path d="M6 10v-2l4 -1l2.5 2.5l2.5 .5" />
    <path d="M21 22a1 1 0 0 0 -1 -1h-16a1 1 0 0 0 -1 1" />
    <path d="M18 21l1 -11l2 -1" />
  </svg>
  );
};

export default IconTreadmill;