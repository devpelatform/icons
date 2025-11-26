import React from 'react';

interface IconClockPauseProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconClockPause: React.FC<IconClockPauseProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-clock-pause ${defaultSize} ${userClassName}`.trim();

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
    <path d="M20.942 13.018a9 9 0 1 0 -7.909 7.922" />
    <path d="M12 7v5l2 2" />
    <path d="M17 17v5" />
    <path d="M21 17v5" />
  </svg>
  );
};

export default IconClockPause;