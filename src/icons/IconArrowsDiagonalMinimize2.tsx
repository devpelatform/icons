import React from 'react';

interface IconArrowsDiagonalMinimize2Props {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconArrowsDiagonalMinimize2: React.FC<IconArrowsDiagonalMinimize2Props> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-arrows-diagonal-minimize-2 ${defaultSize} ${userClassName}`.trim();

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
    <path d="M18 10h-4v-4" />
    <path d="M20 4l-6 6" />
    <path d="M6 14h4v4" />
    <path d="M10 14l-6 6" />
  </svg>
  );
};

export default IconArrowsDiagonalMinimize2;