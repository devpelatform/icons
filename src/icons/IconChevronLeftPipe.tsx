import React from 'react';

interface IconChevronLeftPipeProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconChevronLeftPipe: React.FC<IconChevronLeftPipeProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-chevron-left-pipe ${defaultSize} ${userClassName}`.trim();

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
    <path d="M7 6v12" />
    <path d="M18 6l-6 6l6 6" />
  </svg>
  );
};

export default IconChevronLeftPipe;