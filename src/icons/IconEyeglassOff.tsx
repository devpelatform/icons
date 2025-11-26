import React from 'react';

interface IconEyeglassOffProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconEyeglassOff: React.FC<IconEyeglassOffProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-eyeglass-off ${defaultSize} ${userClassName}`.trim();

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
    <path d="M5.536 5.546l-2.536 8.454" />
    <path d="M16 4h2l3 10" />
    <path d="M10 16h4" />
    <path d="M19.426 19.423a3.5 3.5 0 0 1 -5.426 -2.923v-2.5m4 0h3v2.5c0 .157 -.01 .312 -.03 .463" />
    <path d="M10 16.5a3.5 3.5 0 0 1 -7 0v-2.5h7v2.5" />
    <path d="M3 3l18 18" />
  </svg>
  );
};

export default IconEyeglassOff;