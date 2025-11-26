import React from 'react';

interface IconMaximizeOffProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconMaximizeOff: React.FC<IconMaximizeOffProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-maximize-off ${defaultSize} ${userClassName}`.trim();

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
    <path d="M4 8v-2c0 -.551 .223 -1.05 .584 -1.412" />
    <path d="M4 16v2a2 2 0 0 0 2 2h2" />
    <path d="M16 4h2a2 2 0 0 1 2 2v2" />
    <path d="M16 20h2c.545 0 1.04 -.218 1.4 -.572" />
    <path d="M3 3l18 18" />
  </svg>
  );
};

export default IconMaximizeOff;