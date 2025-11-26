import React from 'react';

interface IconDeviceMobileShareProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconDeviceMobileShare: React.FC<IconDeviceMobileShareProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-device-mobile-share ${defaultSize} ${userClassName}`.trim();

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
    <path d="M12 21h-4a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8" />
    <path d="M11 4h2" />
    <path d="M16 22l5 -5" />
    <path d="M21 21.5v-4.5h-4.5" />
    <path d="M12 17v.01" />
  </svg>
  );
};

export default IconDeviceMobileShare;