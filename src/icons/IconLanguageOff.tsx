import React from 'react';

interface IconLanguageOffProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconLanguageOff: React.FC<IconLanguageOffProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-language-off ${defaultSize} ${userClassName}`.trim();

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
    <path d="M12 20l2.463 -5.541m1.228 -2.764l.309 -.695l.8 1.8" />
    <path d="M18 18h-5.1" />
    <path d="M8.747 8.748c-.66 2.834 -2.536 4.252 -4.747 4.252" />
    <path d="M4 6.371l2.371 0" />
    <path d="M5 9c0 2.144 2.252 3.908 6 4" />
    <path d="M3 3l18 18" />
  </svg>
  );
};

export default IconLanguageOff;