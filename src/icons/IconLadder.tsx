import React from 'react';

interface IconLadderProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconLadder: React.FC<IconLadderProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-ladder ${defaultSize} ${userClassName}`.trim();

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
    <path d="M8 3v18" />
    <path d="M16 3v18" />
    <path d="M8 14h8" />
    <path d="M8 10h8" />
    <path d="M8 6h8" />
    <path d="M8 18h8" />
  </svg>
  );
};

export default IconLadder;