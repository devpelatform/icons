import React from 'react';

interface IconArrowLoopRight2Props {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconArrowLoopRight2: React.FC<IconArrowLoopRight2Props> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-arrow-loop-right-2 ${defaultSize} ${userClassName}`.trim();

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
    <path d="M12 21v-6m0 -6v-1a4 4 0 1 0 -4 4h13" />
    <path d="M17 16l4 -4l-4 -4" />
  </svg>
  );
};

export default IconArrowLoopRight2;