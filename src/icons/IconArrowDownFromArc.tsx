import React from 'react';

interface IconArrowDownFromArcProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconArrowDownFromArc: React.FC<IconArrowDownFromArcProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-arrow-down-from-arc ${defaultSize} ${userClassName}`.trim();

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
    <path d="M12 15v-12" />
    <path d="M16 7l-4 -4l-4 4" />
    <path d="M3 12a9 9 0 0 0 18 0" />
  </svg>
  );
};

export default IconArrowDownFromArc;