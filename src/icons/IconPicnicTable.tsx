import React from 'react';

interface IconPicnicTableProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconPicnicTable: React.FC<IconPicnicTableProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-picnic-table ${defaultSize} ${userClassName}`.trim();

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
    <path d="M16 7l2 9m-10 -9l-2 9m-1 -9h14m2 5h-18" />
  </svg>
  );
};

export default IconPicnicTable;