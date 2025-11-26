import React from 'react';

interface IconWorldPlusProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconWorldPlus: React.FC<IconWorldPlusProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-world-plus ${defaultSize} ${userClassName}`.trim();

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
    <path d="M20.985 12.518a9 9 0 1 0 -8.45 8.466" />
    <path d="M3.6 9h16.8" />
    <path d="M3.6 15h11.4" />
    <path d="M11.5 3a17 17 0 0 0 0 18" />
    <path d="M12.5 3a16.998 16.998 0 0 1 2.283 12.157" />
    <path d="M16 19h6" />
    <path d="M19 16v6" />
  </svg>
  );
};

export default IconWorldPlus;