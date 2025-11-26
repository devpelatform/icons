import React from 'react';

interface IconWorldWwwProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconWorldWww: React.FC<IconWorldWwwProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-world-www ${defaultSize} ${userClassName}`.trim();

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
    <path d="M19.5 7a9 9 0 0 0 -7.5 -4a8.991 8.991 0 0 0 -7.484 4" />
    <path d="M11.5 3a16.989 16.989 0 0 0 -1.826 4" />
    <path d="M12.5 3a16.989 16.989 0 0 1 1.828 4" />
    <path d="M19.5 17a9 9 0 0 1 -7.5 4a8.991 8.991 0 0 1 -7.484 -4" />
    <path d="M11.5 21a16.989 16.989 0 0 1 -1.826 -4" />
    <path d="M12.5 21a16.989 16.989 0 0 0 1.828 -4" />
    <path d="M2 10l1 4l1.5 -4l1.5 4l1 -4" />
    <path d="M17 10l1 4l1.5 -4l1.5 4l1 -4" />
    <path d="M9.5 10l1 4l1.5 -4l1.5 4l1 -4" />
  </svg>
  );
};

export default IconWorldWww;