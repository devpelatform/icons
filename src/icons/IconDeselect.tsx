import React from 'react';

interface IconDeselectProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconDeselect: React.FC<IconDeselectProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-deselect ${defaultSize} ${userClassName}`.trim();

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
    <path d="M12 8h3a1 1 0 0 1 1 1v3" />
    <path d="M16 16h-7a1 1 0 0 1 -1 -1v-7" />
    <path d="M12 20v.01" />
    <path d="M16 20v.01" />
    <path d="M8 20v.01" />
    <path d="M4 20v.01" />
    <path d="M4 16v.01" />
    <path d="M4 12v.01" />
    <path d="M4 8v.01" />
    <path d="M8 4v.01" />
    <path d="M12 4v.01" />
    <path d="M16 4v.01" />
    <path d="M20 4v.01" />
    <path d="M20 8v.01" />
    <path d="M20 12v.01" />
    <path d="M20 16v.01" />
    <path d="M3 3l18 18" />
  </svg>
  );
};

export default IconDeselect;