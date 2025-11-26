import React from 'react';

interface IconAuth2faProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconAuth2fa: React.FC<IconAuth2faProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-auth-2fa ${defaultSize} ${userClassName}`.trim();

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
    <path d="M7 16h-4l3.47 -4.66a2 2 0 1 0 -3.47 -1.54" />
    <path d="M10 16v-8h4" />
    <path d="M10 12l3 0" />
    <path d="M17 16v-6a2 2 0 0 1 4 0v6" />
    <path d="M17 13l4 0" />
  </svg>
  );
};

export default IconAuth2fa;