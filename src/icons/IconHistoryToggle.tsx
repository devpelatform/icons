import React from 'react';

interface IconHistoryToggleProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconHistoryToggle: React.FC<IconHistoryToggleProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-history-toggle ${defaultSize} ${userClassName}`.trim();

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
    <path d="M10 20.777a8.942 8.942 0 0 1 -2.48 -.969" />
    <path d="M14 3.223a9.003 9.003 0 0 1 0 17.554" />
    <path d="M4.579 17.093a8.961 8.961 0 0 1 -1.227 -2.592" />
    <path d="M3.124 10.5c.16 -.95 .468 -1.85 .9 -2.675l.169 -.305" />
    <path d="M6.907 4.579a8.954 8.954 0 0 1 3.093 -1.356" />
    <path d="M12 8v4l3 3" />
  </svg>
  );
};

export default IconHistoryToggle;