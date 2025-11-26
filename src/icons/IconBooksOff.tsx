import React from 'react';

interface IconBooksOffProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBooksOff: React.FC<IconBooksOffProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-books-off ${defaultSize} ${userClassName}`.trim();

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
    <path d="M9 9v10a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-14" />
    <path d="M8 4a1 1 0 0 1 1 1" />
    <path d="M9 5a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v4" />
    <path d="M13 13v6a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-10" />
    <path d="M5 8h3" />
    <path d="M9 16h4" />
    <path d="M14.254 10.244l-1.218 -4.424a1.02 1.02 0 0 1 .634 -1.219l.133 -.041l2.184 -.53c.562 -.135 1.133 .19 1.282 .732l3.236 11.75" />
    <path d="M19.585 19.589l-1.572 .38c-.562 .136 -1.133 -.19 -1.282 -.731l-.952 -3.458" />
    <path d="M14 9l4 -1" />
    <path d="M19.207 15.199l.716 -.18" />
    <path d="M3 3l18 18" />
  </svg>
  );
};

export default IconBooksOff;