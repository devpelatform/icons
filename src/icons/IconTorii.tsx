import React from 'react';

interface IconToriiProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconTorii: React.FC<IconToriiProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-torii ${defaultSize} ${userClassName}`.trim();

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
    <path d="M4 4c5.333 1.333 10.667 1.333 16 0" />
    <path d="M4 8h16" />
    <path d="M12 5v3" />
    <path d="M18 4.5v15.5" />
    <path d="M6 4.5v15.5" />
  </svg>
  );
};

export default IconTorii;