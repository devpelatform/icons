import React from 'react';

interface IconProtocolProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconProtocol: React.FC<IconProtocolProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-protocol ${defaultSize} ${userClassName}`.trim();

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
    <path d="M15 6l-7 12" />
    <path d="M20 6l-7 12" />
    <path d="M5 14v.015" />
    <path d="M5 10.015v.015" />
  </svg>
  );
};

export default IconProtocol;