import React from 'react';

interface IconArrowRampLeft3Props {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconArrowRampLeft3: React.FC<IconArrowRampLeft3Props> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-arrow-ramp-left-3 ${defaultSize} ${userClassName}`.trim();

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
    <path d="M18 3v6" />
    <path d="M8 16l-4 -4l4 -4" />
    <path d="M18 21v-6a3 3 0 0 0 -3 -3h-11" />
  </svg>
  );
};

export default IconArrowRampLeft3;