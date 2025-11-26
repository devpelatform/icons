import React from 'react';

interface IconCalendarRepeatProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconCalendarRepeat: React.FC<IconCalendarRepeatProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-calendar-repeat ${defaultSize} ${userClassName}`.trim();

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
    <path d="M12.5 21h-6.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v3" />
    <path d="M16 3v4" />
    <path d="M8 3v4" />
    <path d="M4 11h12" />
    <path d="M20 14l2 2h-3" />
    <path d="M20 18l2 -2" />
    <path d="M19 16a3 3 0 1 0 2 5.236" />
  </svg>
  );
};

export default IconCalendarRepeat;