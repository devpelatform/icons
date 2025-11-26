import React from 'react';

interface IconSquareToggleProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconSquareToggle: React.FC<IconSquareToggleProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-square-toggle ${defaultSize} ${userClassName}`.trim();

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
    <path d="M12 2l0 20" />
    <path d="M14 20h-8a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8" />
    <path d="M20 6a2 2 0 0 0 -2 -2" />
    <path d="M18 20a2 2 0 0 0 2 -2" />
    <path d="M20 10l0 4" />
  </svg>
  );
};

export default IconSquareToggle;