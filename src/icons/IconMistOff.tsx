import React from 'react';

interface IconMistOffProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconMistOff: React.FC<IconMistOffProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-mist-off ${defaultSize} ${userClassName}`.trim();

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
    <path d="M12 5h9" />
    <path d="M3 10h7" />
    <path d="M18 10h1" />
    <path d="M5 15h5" />
    <path d="M14 15h1m4 0h2" />
    <path d="M3 20h9m4 0h3" />
    <path d="M3 3l18 18" />
  </svg>
  );
};

export default IconMistOff;