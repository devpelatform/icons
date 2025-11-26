import React from 'react';

interface IconArrowRampRight2Props {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconArrowRampRight2: React.FC<IconArrowRampRight2Props> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-arrow-ramp-right-2 ${defaultSize} ${userClassName}`.trim();

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
    <path d="M6 3v8.707" />
    <path d="M16 14l4 -4l-4 -4" />
    <path d="M6 21c0 -6.075 4.925 -11 11 -11h3" />
  </svg>
  );
};

export default IconArrowRampRight2;