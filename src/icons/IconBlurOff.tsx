import React from 'react';

interface IconBlurOffProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBlurOff: React.FC<IconBlurOffProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-blur-off ${defaultSize} ${userClassName}`.trim();

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
    <path d="M12 3v5m0 4v8" />
    <path d="M5.641 5.631a9 9 0 1 0 12.719 12.738m1.68 -2.318a9 9 0 0 0 -12.074 -12.098" />
    <path d="M16 12h5" />
    <path d="M13 9h7" />
    <path d="M12 6h6" />
    <path d="M12 18h6" />
    <path d="M12 15h3m4 0h1" />
    <path d="M3 3l18 18" />
  </svg>
  );
};

export default IconBlurOff;