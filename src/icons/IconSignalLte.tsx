import React from 'react';

interface IconSignalLteProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconSignalLte: React.FC<IconSignalLteProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-signal-lte ${defaultSize} ${userClassName}`.trim();

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
    <path d="M21 8h-4v8h4" />
    <path d="M17 12h2.5" />
    <path d="M4 8v8h4" />
    <path d="M10 8h4" />
    <path d="M12 8v8" />
  </svg>
  );
};

export default IconSignalLte;