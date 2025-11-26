import React from 'react';

interface IconSuperscriptProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconSuperscript: React.FC<IconSuperscriptProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-superscript ${defaultSize} ${userClassName}`.trim();

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
    <path d="M5 7l8 10m-8 0l8 -10" />
    <path d="M21 11h-4l3.5 -4a1.73 1.73 0 0 0 -3.5 -2" />
  </svg>
  );
};

export default IconSuperscript;