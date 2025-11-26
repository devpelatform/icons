import React from 'react';

interface IconCircleDottedLetterHProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconCircleDottedLetterH: React.FC<IconCircleDottedLetterHProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-circle-dotted-letter-h ${defaultSize} ${userClassName}`.trim();

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
    <path d="M10 16v-8m4 0v8" />
    <path d="M10 12h4" />
    <path d="M7.5 4.21v.01" />
    <path d="M4.21 7.5v.01" />
    <path d="M3 12v.01" />
    <path d="M4.21 16.5v.01" />
    <path d="M7.5 19.79v.01" />
    <path d="M12 21v.01" />
    <path d="M16.5 19.79v.01" />
    <path d="M19.79 16.5v.01" />
    <path d="M21 12v.01" />
    <path d="M19.79 7.5v.01" />
    <path d="M16.5 4.21v.01" />
    <path d="M12 3v.01" />
  </svg>
  );
};

export default IconCircleDottedLetterH;