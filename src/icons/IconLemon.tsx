import React from 'react';

interface IconLemonProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconLemon: React.FC<IconLemonProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-lemon ${defaultSize} ${userClassName}`.trim();

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
    <path d="M17.536 3.393c3.905 3.906 3.905 10.237 0 14.143c-3.906 3.905 -10.237 3.905 -14.143 0l14.143 -14.143" />
    <path d="M5.868 15.06a6.5 6.5 0 0 0 9.193 -9.192" />
    <path d="M10.464 10.464l4.597 4.597" />
    <path d="M10.464 10.464v6.364" />
    <path d="M10.464 10.464h6.364" />
  </svg>
  );
};

export default IconLemon;