import React from 'react';

interface IconExternalLinkOffProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconExternalLinkOff: React.FC<IconExternalLinkOffProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-external-link-off ${defaultSize} ${userClassName}`.trim();

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
    <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" />
    <path d="M10 14l2 -2m2.007 -2.007l6 -6" />
    <path d="M15 4h5v5" />
    <path d="M3 3l18 18" />
  </svg>
  );
};

export default IconExternalLinkOff;