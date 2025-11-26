import React from 'react';

interface IconArrowsCrossProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconArrowsCross: React.FC<IconArrowsCrossProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-arrows-cross ${defaultSize} ${userClassName}`.trim();

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
    <path d="M16 4h4v4" />
    <path d="M15 9l5 -5" />
    <path d="M4 20l5 -5" />
    <path d="M16 20h4v-4" />
    <path d="M4 4l16 16" />
  </svg>
  );
};

export default IconArrowsCross;