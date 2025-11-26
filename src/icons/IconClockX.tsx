import React from 'react';

interface IconClockXProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconClockX: React.FC<IconClockXProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-clock-x ${defaultSize} ${userClassName}`.trim();

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
    <path d="M20.926 13.15a9 9 0 1 0 -7.835 7.784" />
    <path d="M12 7v5l2 2" />
    <path d="M22 22l-5 -5" />
    <path d="M17 22l5 -5" />
  </svg>
  );
};

export default IconClockX;