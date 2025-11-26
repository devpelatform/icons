import React from 'react';

interface IconTridentProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconTrident: React.FC<IconTridentProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-trident ${defaultSize} ${userClassName}`.trim();

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
    <path d="M3 6l2 -2v3a7 7 0 0 0 14 0v-3l2 2" />
    <path d="M12 21v-18l-2 2m4 0l-2 -2" />
  </svg>
  );
};

export default IconTrident;