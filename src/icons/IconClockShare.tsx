import React from 'react';

interface IconClockShareProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconClockShare: React.FC<IconClockShareProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-clock-share ${defaultSize} ${userClassName}`.trim();

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
    <path d="M20.943 13.016a9 9 0 1 0 -8.915 7.984" />
    <path d="M16 22l5 -5" />
    <path d="M21 21.5v-4.5h-4.5" />
    <path d="M12 7v5l2 2" />
  </svg>
  );
};

export default IconClockShare;