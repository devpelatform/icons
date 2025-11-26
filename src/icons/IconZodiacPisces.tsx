import React from 'react';

interface IconZodiacPiscesProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconZodiacPisces: React.FC<IconZodiacPiscesProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-zodiac-pisces ${defaultSize} ${userClassName}`.trim();

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
    <path d="M5 3a21 21 0 0 1 0 18" />
    <path d="M19 3a21 21 0 0 0 0 18" />
    <path d="M5 12l14 0" />
  </svg>
  );
};

export default IconZodiacPisces;