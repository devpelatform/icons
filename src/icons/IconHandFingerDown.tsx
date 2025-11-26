import React from 'react';

interface IconHandFingerDownProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconHandFingerDown: React.FC<IconHandFingerDownProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-hand-finger-down ${defaultSize} ${userClassName}`.trim();

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
    <path d="M8 12v8.5a1.5 1.5 0 0 0 3 0v-7.5" />
    <path d="M11 13.5v2a1.5 1.5 0 0 0 3 0v-2.5" />
    <path d="M14 14.5a1.5 1.5 0 0 0 3 0v-1.5" />
    <path d="M17 13.5a1.5 1.5 0 0 0 3 0v-4.5a6 6 0 0 0 -6 -6h-2h.208a6 6 0 0 0 -5.012 2.7l-.196 .3q -.468 .718 -3.286 5.728a1.5 1.5 0 0 0 .536 2.022c.734 .44 1.674 .325 2.28 -.28l1.47 -1.47" />
  </svg>
  );
};

export default IconHandFingerDown;