import React from 'react';

interface IconVirusOffProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconVirusOff: React.FC<IconVirusOffProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-virus-off ${defaultSize} ${userClassName}`.trim();

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
    <path d="M3 3l18 18" />
    <path d="M8.469 8.46a5 5 0 0 0 7.058 7.084" />
    <path d="M16.913 12.936a5 5 0 0 0 -5.826 -5.853" />
    <path d="M12 7v-4" />
    <path d="M11 3h2" />
    <path d="M15.536 8.464l2.828 -2.828" />
    <path d="M17.657 4.929l1.414 1.414" />
    <path d="M17 12h4" />
    <path d="M21 11v2" />
    <path d="M18.364 18.363l-.707 .707" />
    <path d="M12 17v4" />
    <path d="M13 21h-2" />
    <path d="M8.465 15.536l-2.829 2.828" />
    <path d="M6.343 19.071l-1.413 -1.414" />
    <path d="M7 12h-4" />
    <path d="M3 13v-2" />
    <path d="M5.636 5.637l-.707 .707" />
  </svg>
  );
};

export default IconVirusOff;