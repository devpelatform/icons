import React from 'react';

interface IconArrowDownBarProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconArrowDownBar: React.FC<IconArrowDownBarProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-arrow-down-bar ${defaultSize} ${userClassName}`.trim();

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
    <path d="M12 3v18" />
    <path d="M9 18l3 3l3 -3" />
    <path d="M9 3h6" />
  </svg>
  );
};

export default IconArrowDownBar;