import React from 'react';

interface IconArrowLoopLeftProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconArrowLoopLeft: React.FC<IconArrowLoopLeftProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-arrow-loop-left ${defaultSize} ${userClassName}`.trim();

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
    <path d="M13 21v-13a4 4 0 1 1 4 4h-13" />
    <path d="M8 16l-4 -4l4 -4" />
  </svg>
  );
};

export default IconArrowLoopLeft;