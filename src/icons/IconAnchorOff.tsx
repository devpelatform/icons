import React from 'react';

interface IconAnchorOffProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconAnchorOff: React.FC<IconAnchorOffProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-anchor-off ${defaultSize} ${userClassName}`.trim();

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
    <path d="M12 12v9" />
    <path d="M4 13a8 8 0 0 0 14.138 5.13m1.44 -2.56a7.99 7.99 0 0 0 .422 -2.57" />
    <path d="M21 13h-2" />
    <path d="M5 13h-2" />
    <path d="M12.866 8.873a3 3 0 1 0 -3.737 -3.747" />
    <path d="M3 3l18 18" />
  </svg>
  );
};

export default IconAnchorOff;