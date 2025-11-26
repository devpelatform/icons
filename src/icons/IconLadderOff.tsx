import React from 'react';

interface IconLadderOffProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconLadderOff: React.FC<IconLadderOffProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-ladder-off ${defaultSize} ${userClassName}`.trim();

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
    <path d="M8 3v1m0 4v13" />
    <path d="M16 3v9m0 4v5" />
    <path d="M8 14h6" />
    <path d="M8 10h2m4 0h2" />
    <path d="M10 6h6" />
    <path d="M8 18h8" />
    <path d="M3 3l18 18" />
  </svg>
  );
};

export default IconLadderOff;