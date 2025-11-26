import React from 'react';

interface IconSortDescendingLettersProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconSortDescendingLetters: React.FC<IconSortDescendingLettersProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-sort-descending-letters ${defaultSize} ${userClassName}`.trim();

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
    <path d="M15 21v-5c0 -1.38 .62 -2 2 -2s2 .62 2 2v5m0 -3h-4" />
    <path d="M19 10h-4l4 -7h-4" />
    <path d="M4 15l3 3l3 -3" />
    <path d="M7 6v12" />
  </svg>
  );
};

export default IconSortDescendingLetters;