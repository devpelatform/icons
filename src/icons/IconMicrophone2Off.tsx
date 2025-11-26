import React from 'react';

interface IconMicrophone2OffProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconMicrophone2Off: React.FC<IconMicrophone2OffProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-microphone-2-off ${defaultSize} ${userClassName}`.trim();

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
    <path d="M16.908 12.917a5 5 0 1 0 -5.827 -5.819" />
    <path d="M10.116 10.125l-6.529 7.46a2 2 0 1 0 2.827 2.83l7.461 -6.529" />
    <path d="M3 3l18 18" />
  </svg>
  );
};

export default IconMicrophone2Off;