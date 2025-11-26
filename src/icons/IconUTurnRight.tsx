import React from 'react';

interface IconUTurnRightProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconUTurnRight: React.FC<IconUTurnRightProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-u-turn-right ${defaultSize} ${userClassName}`.trim();

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
    <path d="M7 20v-11.5a4.5 4.5 0 0 1 9 0v8.5" />
    <path d="M13 14l3 3l3 -3" />
  </svg>
  );
};

export default IconUTurnRight;