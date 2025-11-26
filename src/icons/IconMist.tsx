import React from 'react';

interface IconMistProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconMist: React.FC<IconMistProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-mist ${defaultSize} ${userClassName}`.trim();

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
    <path d="M5 5h3m4 0h9" />
    <path d="M3 10h11m4 0h1" />
    <path d="M5 15h5m4 0h7" />
    <path d="M3 20h9m4 0h3" />
  </svg>
  );
};

export default IconMist;