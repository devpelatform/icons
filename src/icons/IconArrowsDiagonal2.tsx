import React from 'react';

interface IconArrowsDiagonal2Props {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconArrowsDiagonal2: React.FC<IconArrowsDiagonal2Props> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-arrows-diagonal-2 ${defaultSize} ${userClassName}`.trim();

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
    <path d="M16 20l4 0l0 -4" />
    <path d="M14 14l6 6" />
    <path d="M8 4l-4 0l0 4" />
    <path d="M4 4l6 6" />
  </svg>
  );
};

export default IconArrowsDiagonal2;