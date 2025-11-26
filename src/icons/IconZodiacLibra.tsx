import React from 'react';

interface IconZodiacLibraProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconZodiacLibra: React.FC<IconZodiacLibraProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-zodiac-libra ${defaultSize} ${userClassName}`.trim();

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
    <path d="M5 20l14 0" />
    <path d="M5 17h5v-.3a7 7 0 1 1 4 0v.3h5" />
  </svg>
  );
};

export default IconZodiacLibra;