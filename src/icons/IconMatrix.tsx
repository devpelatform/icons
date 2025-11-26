import React from 'react';

interface IconMatrixProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconMatrix: React.FC<IconMatrixProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-matrix ${defaultSize} ${userClassName}`.trim();

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
    <path d="M8 16h.013" />
    <path d="M12.01 16h.005" />
    <path d="M16.015 16h.005" />
    <path d="M16.015 12h.005" />
    <path d="M8.01 12h.005" />
    <path d="M12.01 12h.005" />
    <path d="M16.02 8h.005" />
    <path d="M8.015 8h.005" />
    <path d="M12.015 8h.005" />
    <path d="M7 4h-1a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h1" />
    <path d="M17 4h1a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-1" />
  </svg>
  );
};

export default IconMatrix;