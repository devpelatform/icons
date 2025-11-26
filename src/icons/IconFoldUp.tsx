import React from 'react';

interface IconFoldUpProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconFoldUp: React.FC<IconFoldUpProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-fold-up ${defaultSize} ${userClassName}`.trim();

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
    <path d="M12 13v-8l-3 3m6 0l-3 -3" />
    <path d="M9 17l1 0" />
    <path d="M14 17l1 0" />
    <path d="M19 17l1 0" />
    <path d="M4 17l1 0" />
  </svg>
  );
};

export default IconFoldUp;