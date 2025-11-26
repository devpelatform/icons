import React from 'react';

interface IconArrowLeftToArcProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconArrowLeftToArc: React.FC<IconArrowLeftToArcProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-arrow-left-to-arc ${defaultSize} ${userClassName}`.trim();

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
    <path d="M21 12h-12" />
    <path d="M13 16l-4 -4l4 -4" />
    <path d="M12 3a9 9 0 1 0 0 18" />
  </svg>
  );
};

export default IconArrowLeftToArc;