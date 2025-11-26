import React from 'react';

interface IconLanguageProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconLanguage: React.FC<IconLanguageProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-language ${defaultSize} ${userClassName}`.trim();

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
    <path d="M9 6.371c0 4.418 -2.239 6.629 -5 6.629" />
    <path d="M4 6.371h7" />
    <path d="M5 9c0 2.144 2.252 3.908 6 4" />
    <path d="M12 20l4 -9l4 9" />
    <path d="M19.1 18h-6.2" />
    <path d="M6.694 3l.793 .582" />
  </svg>
  );
};

export default IconLanguage;