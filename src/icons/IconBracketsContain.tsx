import React from 'react';

interface IconBracketsContainProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBracketsContain: React.FC<IconBracketsContainProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-brackets-contain ${defaultSize} ${userClassName}`.trim();

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
    <path d="M7 4h-4v16h4" />
    <path d="M17 4h4v16h-4" />
    <path d="M8 16h.01" />
    <path d="M12 16h.01" />
    <path d="M16 16h.01" />
  </svg>
  );
};

export default IconBracketsContain;