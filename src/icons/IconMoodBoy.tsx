import React from 'react';

interface IconMoodBoyProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconMoodBoy: React.FC<IconMoodBoyProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-mood-boy ${defaultSize} ${userClassName}`.trim();

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
    <path d="M17 4.5a9 9 0 0 1 3.864 5.89a2.5 2.5 0 0 1 -.29 4.36a9 9 0 0 1 -17.137 0a2.5 2.5 0 0 1 -.29 -4.36a9 9 0 0 1 3.746 -5.81" />
    <path d="M9.5 16a3.5 3.5 0 0 0 5 0" />
    <path d="M8.5 2c1.5 1 2.5 3.5 2.5 5" />
    <path d="M12.5 2c1.5 2 2 3.5 2 5" />
    <path d="M9 12l.01 0" />
    <path d="M15 12l.01 0" />
  </svg>
  );
};

export default IconMoodBoy;