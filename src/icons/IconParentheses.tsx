import React from 'react';

interface IconParenthesesProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconParentheses: React.FC<IconParenthesesProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-parentheses ${defaultSize} ${userClassName}`.trim();

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
    <path d="M7 4a12.25 12.25 0 0 0 0 16" />
    <path d="M17 4a12.25 12.25 0 0 1 0 16" />
  </svg>
  );
};

export default IconParentheses;