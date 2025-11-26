import React from 'react';

interface IconSwitchProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconSwitch: React.FC<IconSwitchProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-switch ${defaultSize} ${userClassName}`.trim();

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
    <path d="M15 4l4 0l0 4" />
    <path d="M14.75 9.25l4.25 -5.25" />
    <path d="M5 19l4 -4" />
    <path d="M15 19l4 0l0 -4" />
    <path d="M5 5l14 14" />
  </svg>
  );
};

export default IconSwitch;