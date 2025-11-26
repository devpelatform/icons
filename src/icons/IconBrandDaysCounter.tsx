import React from 'react';

interface IconBrandDaysCounterProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBrandDaysCounter: React.FC<IconBrandDaysCounterProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-brand-days-counter ${defaultSize} ${userClassName}`.trim();

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
    <path d="M20.779 10.007a9 9 0 1 0 -10.77 10.772" />
    <path d="M13 21h8v-7" />
    <path d="M12 8v4l3 3" />
  </svg>
  );
};

export default IconBrandDaysCounter;