import React from 'react';

interface IconWorldPauseProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconWorldPause: React.FC<IconWorldPauseProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-world-pause ${defaultSize} ${userClassName}`.trim();

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
    <path d="M20.945 12.997a9 9 0 1 0 -7.928 7.945" />
    <path d="M3.6 9h16.8" />
    <path d="M3.6 15h9.9" />
    <path d="M11.5 3a17 17 0 0 0 0 18" />
    <path d="M12.5 3a16.992 16.992 0 0 1 2.51 10.526" />
    <path d="M17 17v5" />
    <path d="M21 17v5" />
  </svg>
  );
};

export default IconWorldPause;