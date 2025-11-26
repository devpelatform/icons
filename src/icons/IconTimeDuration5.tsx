import React from 'react';

interface IconTimeDuration5Props {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconTimeDuration5: React.FC<IconTimeDuration5Props> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-time-duration-5 ${defaultSize} ${userClassName}`.trim();

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
    <path d="M10 15h2a1.5 1.5 0 0 0 0 -3h-2v-3h3.5" />
    <path d="M3 12v.01" />
    <path d="M21 12v.01" />
    <path d="M12 21v.01" />
    <path d="M7.5 4.2v.01" />
    <path d="M16.5 19.8v.01" />
    <path d="M7.5 19.8v.01" />
    <path d="M4.2 16.5v.01" />
    <path d="M19.8 16.5v.01" />
    <path d="M19.8 7.5v.01" />
    <path d="M4.2 7.5v.01" />
    <path d="M16.5 4.206a9.042 9.042 0 0 0 -4.5 -1.206" />
  </svg>
  );
};

export default IconTimeDuration5;