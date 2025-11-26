import React from 'react';

interface IconBorderBottomPlusProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBorderBottomPlus: React.FC<IconBorderBottomPlusProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-border-bottom-plus ${defaultSize} ${userClassName}`.trim();

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
    <path d="M4 20h16" />
    <path d="M4 16v-.01" />
    <path d="M20 16v-.01" />
    <path d="M4 12v-.01" />
    <path d="M20 12v-.01" />
    <path d="M4 8v-.01" />
    <path d="M20 8v-.01" />
    <path d="M4 4v-.01" />
    <path d="M8 4v-.01" />
    <path d="M12 4v-.01" />
    <path d="M16 4v-.01" />
    <path d="M20 4v-.01" />
    <path d="M15 12h-6" />
    <path d="M12 9v6" />
  </svg>
  );
};

export default IconBorderBottomPlus;