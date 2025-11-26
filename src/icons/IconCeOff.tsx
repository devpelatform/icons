import React from 'react';

interface IconCeOffProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconCeOff: React.FC<IconCeOffProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-ce-off ${defaultSize} ${userClassName}`.trim();

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
    <path d="M6.53 6.53a6.001 6.001 0 0 0 2.47 11.47" />
    <path d="M21 6a6 6 0 0 0 -5.927 5.061l.927 .939" />
    <path d="M16 12h5" />
    <path d="M3 3l18 18" />
  </svg>
  );
};

export default IconCeOff;