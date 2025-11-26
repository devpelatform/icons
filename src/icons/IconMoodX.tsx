import React from 'react';

interface IconMoodXProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconMoodX: React.FC<IconMoodXProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-mood-x ${defaultSize} ${userClassName}`.trim();

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
    <path d="M20.983 12.556a9 9 0 1 0 -8.433 8.427" />
    <path d="M9 10h.01" />
    <path d="M15 10h.01" />
    <path d="M9.5 15c.658 .64 1.56 1 2.5 1c.194 0 .386 -.015 .574 -.045" />
    <path d="M21.5 21.5l-5 -5" />
    <path d="M16.5 21.5l5 -5" />
  </svg>
  );
};

export default IconMoodX;