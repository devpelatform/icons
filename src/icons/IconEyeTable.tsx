import React from 'react';

interface IconEyeTableProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconEyeTable: React.FC<IconEyeTableProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-eye-table ${defaultSize} ${userClassName}`.trim();

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
    <path d="M8 18h-.011" />
    <path d="M12 18h-.011" />
    <path d="M16 18h-.011" />
    <path d="M4 3h16" />
    <path d="M5 3v17a1 1 0 0 0 1 1h12a1 1 0 0 0 1 -1v-17" />
    <path d="M14 7h-4" />
    <path d="M9 15h1" />
    <path d="M14 15h1" />
    <path d="M12 11v-4" />
  </svg>
  );
};

export default IconEyeTable;