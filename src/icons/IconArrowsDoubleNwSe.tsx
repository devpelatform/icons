import React from 'react';

interface IconArrowsDoubleNwSeProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconArrowsDoubleNwSe: React.FC<IconArrowsDoubleNwSeProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-arrows-double-nw-se ${defaultSize} ${userClassName}`.trim();

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
    <path d="M14 21l-11 -11" />
    <path d="M3 14v-4h4" />
    <path d="M17 14h4v-4" />
    <path d="M10 3l11 11" />
  </svg>
  );
};

export default IconArrowsDoubleNwSe;