import React from 'react';

interface IconTimeDurationOffProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconTimeDurationOff: React.FC<IconTimeDurationOffProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-time-duration-off ${defaultSize} ${userClassName}`.trim();

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
    <path d="M3 12v.01" />
    <path d="M7.5 19.8v.01" />
    <path d="M4.2 16.5v.01" />
    <path d="M4.2 7.5v.01" />
    <path d="M12 21a8.994 8.994 0 0 0 6.362 -2.634m1.685 -2.336a9 9 0 0 0 -8.047 -13.03" />
    <path d="M3 3l18 18" />
  </svg>
  );
};

export default IconTimeDurationOff;