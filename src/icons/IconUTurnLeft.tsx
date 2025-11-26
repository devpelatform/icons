import React from 'react';

interface IconUTurnLeftProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconUTurnLeft: React.FC<IconUTurnLeftProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-u-turn-left ${defaultSize} ${userClassName}`.trim();

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
    <path d="M17 20v-11.5a4.5 4.5 0 1 0 -9 0v8.5" />
    <path d="M11 14l-3 3l-3 -3" />
  </svg>
  );
};

export default IconUTurnLeft;