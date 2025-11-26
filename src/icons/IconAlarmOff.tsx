import React from 'react';

interface IconAlarmOffProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconAlarmOff: React.FC<IconAlarmOffProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-alarm-off ${defaultSize} ${userClassName}`.trim();

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
    <path d="M7.587 7.566a7 7 0 1 0 9.833 9.864m1.35 -2.645a7 7 0 0 0 -8.536 -8.56" />
    <path d="M12 12v1h1" />
    <path d="M5.261 5.265l-1.011 .735" />
    <path d="M17 4l2.75 2" />
    <path d="M3 3l18 18" />
  </svg>
  );
};

export default IconAlarmOff;