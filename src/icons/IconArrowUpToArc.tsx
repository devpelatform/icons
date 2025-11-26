import React from 'react';

interface IconArrowUpToArcProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconArrowUpToArc: React.FC<IconArrowUpToArcProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-arrow-up-to-arc ${defaultSize} ${userClassName}`.trim();

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
    <path d="M12 21v-12" />
    <path d="M8 13l4 -4l4 4" />
    <path d="M21 12a9 9 0 0 0 -18 0" />
  </svg>
  );
};

export default IconArrowUpToArc;