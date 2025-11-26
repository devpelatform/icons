import React from 'react';

interface IconBugOffProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBugOff: React.FC<IconBugOffProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-bug-off ${defaultSize} ${userClassName}`.trim();

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
    <path d="M9.884 5.873a3 3 0 0 1 5.116 2.127v1" />
    <path d="M13 9h3a6 6 0 0 1 1 3v1m-.298 3.705a5 5 0 0 1 -9.702 -1.705v-3a6 6 0 0 1 1 -3h1" />
    <path d="M3 13h4" />
    <path d="M17 13h4" />
    <path d="M12 20v-6" />
    <path d="M4 19l3.35 -2" />
    <path d="M4 7l3.75 2.4" />
    <path d="M20 7l-3.75 2.4" />
    <path d="M3 3l18 18" />
  </svg>
  );
};

export default IconBugOff;