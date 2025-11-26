import React from 'react';

interface IconTimeDuration15Props {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconTimeDuration15: React.FC<IconTimeDuration15Props> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-time-duration-15 ${defaultSize} ${userClassName}`.trim();

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
    <path d="M12 15h2a1 1 0 0 0 1 -1v-1a1 1 0 0 0 -1 -1h-2v-3h3" />
    <path d="M9 9v6" />
    <path d="M3 12v.01" />
    <path d="M12 21v.01" />
    <path d="M7.5 4.2v.01" />
    <path d="M16.5 19.8v.01" />
    <path d="M7.5 19.8v.01" />
    <path d="M4.2 16.5v.01" />
    <path d="M19.8 16.5v.01" />
    <path d="M4.2 7.5v.01" />
    <path d="M21 12a9 9 0 0 0 -9 -9" />
  </svg>
  );
};

export default IconTimeDuration15;