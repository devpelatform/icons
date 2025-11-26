import React from 'react';

interface IconClockHour6FilledProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconClockHour6Filled: React.FC<IconClockHour6FilledProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-clock-hour-6-filled ${defaultSize} ${userClassName}`.trim();

  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
   className={finalClassName} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path d="M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336m-6 12.16a1 1 0 0 0 2 0v-8.5a1 1 0 0 0 -2 0z" />
  </svg>
  );
};

export default IconClockHour6Filled;