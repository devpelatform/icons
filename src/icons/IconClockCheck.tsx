import React from 'react';

interface IconClockCheckProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconClockCheck: React.FC<IconClockCheckProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-clock-check ${defaultSize} ${userClassName}`.trim();

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
    <path d="M20.942 13.021a9 9 0 1 0 -9.407 7.967" />
    <path d="M12 7v5l3 3" />
    <path d="M15 19l2 2l4 -4" />
  </svg>
  );
};

export default IconClockCheck;