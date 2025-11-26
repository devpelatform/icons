import React from 'react';

interface IconBorderCornerPillProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBorderCornerPill: React.FC<IconBorderCornerPillProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-border-corner-pill ${defaultSize} ${userClassName}`.trim();

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
    <path d="M4 20v-5c0 -6.075 4.925 -11 11 -11h5" />
  </svg>
  );
};

export default IconBorderCornerPill;