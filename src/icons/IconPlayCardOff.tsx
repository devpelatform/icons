import React from 'react';

interface IconPlayCardOffProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconPlayCardOff: React.FC<IconPlayCardOffProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-play-card-off ${defaultSize} ${userClassName}`.trim();

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
    <path d="M7 3h10a2 2 0 0 1 2 2v10m0 4a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-14" />
    <path d="M16 18h.01" />
    <path d="M13.716 13.712l-1.716 2.288l-3 -4l1.29 -1.72" />
    <path d="M3 3l18 18" />
  </svg>
  );
};

export default IconPlayCardOff;