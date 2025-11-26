import React from 'react';

interface IconPlaylistOffProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconPlaylistOff: React.FC<IconPlaylistOffProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-playlist-off ${defaultSize} ${userClassName}`.trim();

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
    <path d="M14 14a3 3 0 1 0 3 3" />
    <path d="M17 13v-9h4" />
    <path d="M13 5h-4m-4 0h-2" />
    <path d="M3 9h6" />
    <path d="M9 13h-6" />
    <path d="M3 3l18 18" />
  </svg>
  );
};

export default IconPlaylistOff;