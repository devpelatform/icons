import React from 'react';

interface IconSwitchVerticalProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconSwitchVertical: React.FC<IconSwitchVerticalProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-switch-vertical ${defaultSize} ${userClassName}`.trim();

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
    <path d="M3 8l4 -4l4 4" />
    <path d="M7 4l0 9" />
    <path d="M13 16l4 4l4 -4" />
    <path d="M17 10l0 10" />
  </svg>
  );
};

export default IconSwitchVertical;