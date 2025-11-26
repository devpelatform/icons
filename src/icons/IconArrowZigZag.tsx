import React from 'react';

interface IconArrowZigZagProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconArrowZigZag: React.FC<IconArrowZigZagProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-arrow-zig-zag ${defaultSize} ${userClassName}`.trim();

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
    <path d="M6 20v-10l10 6v-12" />
    <path d="M13 7l3 -3l3 3" />
  </svg>
  );
};

export default IconArrowZigZag;