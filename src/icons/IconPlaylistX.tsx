import React from 'react';

interface IconPlaylistXProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconPlaylistX: React.FC<IconPlaylistXProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-playlist-x ${defaultSize} ${userClassName}`.trim();

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
    <path d="M19 8h-14" />
    <path d="M5 12h7" />
    <path d="M12 16h-7" />
    <path d="M16 14l4 4" />
    <path d="M20 14l-4 4" />
  </svg>
  );
};

export default IconPlaylistX;