import React from 'react';

interface IconMailAiProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconMailAi: React.FC<IconMailAiProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-mail-ai ${defaultSize} ${userClassName}`.trim();

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
    <path d="M10 19h-5a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4" />
    <path d="M3 7l8 5.345m4 -1.345l6 -4" />
    <path d="M14 21v-4a2 2 0 1 1 4 0v4" />
    <path d="M14 19h4" />
    <path d="M21 15v6" />
  </svg>
  );
};

export default IconMailAi;