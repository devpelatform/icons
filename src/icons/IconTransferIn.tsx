import React from 'react';

interface IconTransferInProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconTransferIn: React.FC<IconTransferInProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-transfer-in ${defaultSize} ${userClassName}`.trim();

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
    <path d="M4 18v3h16v-14l-8 -4l-8 4v3" />
    <path d="M4 14h9" />
    <path d="M10 11l3 3l-3 3" />
  </svg>
  );
};

export default IconTransferIn;