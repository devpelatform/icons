import React from 'react';

interface IconLockAccessOffProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconLockAccessOff: React.FC<IconLockAccessOffProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-lock-access-off ${defaultSize} ${userClassName}`.trim();

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
    <path d="M4 8v-2c0 -.554 .225 -1.055 .588 -1.417" />
    <path d="M4 16v2a2 2 0 0 0 2 2h2" />
    <path d="M16 4h2a2 2 0 0 1 2 2v2" />
    <path d="M16 20h2c.55 0 1.05 -.222 1.41 -.582" />
    <path d="M15 11a1 1 0 0 1 1 1m-.29 3.704a1 1 0 0 1 -.71 .296h-6a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h2" />
    <path d="M10 11v-1m1.182 -2.826a2 2 0 0 1 2.818 1.826v1" />
    <path d="M3 3l18 18" />
  </svg>
  );
};

export default IconLockAccessOff;