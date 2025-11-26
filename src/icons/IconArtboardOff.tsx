import React from 'react';

interface IconArtboardOffProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconArtboardOff: React.FC<IconArtboardOffProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-artboard-off ${defaultSize} ${userClassName}`.trim();

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
    <path d="M12 8h3a1 1 0 0 1 1 1v3" />
    <path d="M15.716 15.698a1 1 0 0 1 -.716 .302h-6a1 1 0 0 1 -1 -1v-6c0 -.273 .11 -.52 .287 -.7" />
    <path d="M3 8h1" />
    <path d="M3 16h1" />
    <path d="M8 3v1" />
    <path d="M16 3v1" />
    <path d="M20 8h1" />
    <path d="M20 16h1" />
    <path d="M8 20v1" />
    <path d="M16 20v1" />
    <path d="M3 3l18 18" />
  </svg>
  );
};

export default IconArtboardOff;