import React from 'react';

interface IconCopyleftOffProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconCopyleftOff: React.FC<IconCopyleftOffProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-copyleft-off ${defaultSize} ${userClassName}`.trim();

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
    <path d="M13.303 9.3a3.01 3.01 0 0 1 1.405 1.406m-.586 3.413a3.016 3.016 0 0 1 -4.122 .131" />
    <path d="M20.042 16.045a9 9 0 0 0 -12.087 -12.087m-2.318 1.677a9 9 0 1 0 12.725 12.73" />
    <path d="M3 3l18 18" />
  </svg>
  );
};

export default IconCopyleftOff;