import React from 'react';

interface IconBrandCodepenProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBrandCodepen: React.FC<IconBrandCodepenProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-brand-codepen ${defaultSize} ${userClassName}`.trim();

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
    <path d="M3 15l9 6l9 -6l-9 -6l-9 6" />
    <path d="M3 9l9 6l9 -6l-9 -6l-9 6" />
    <path d="M3 9l0 6" />
    <path d="M21 9l0 6" />
    <path d="M12 3l0 6" />
    <path d="M12 15l0 6" />
  </svg>
  );
};

export default IconBrandCodepen;