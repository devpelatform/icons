import React from 'react';

interface IconApiAppOffProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconApiAppOff: React.FC<IconApiAppOffProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-api-app-off ${defaultSize} ${userClassName}`.trim();

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
    <path d="M12 15h-6.5a2.5 2.5 0 1 1 0 -5h.5" />
    <path d="M15 15v3.5a2.5 2.5 0 1 1 -5 0v-.5" />
    <path d="M13 9h5.5a2.5 2.5 0 1 1 0 5h-.5" />
    <path d="M9 12v-3m.042 -3.957a2.5 2.5 0 0 1 4.958 .457v.5" />
    <path d="M3 3l18 18" />
  </svg>
  );
};

export default IconApiAppOff;