import React from 'react';

interface IconLayoutDistributeHorizontalFilledProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconLayoutDistributeHorizontalFilled: React.FC<IconLayoutDistributeHorizontalFilledProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-layout-distribute-horizontal-filled ${defaultSize} ${userClassName}`.trim();

  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
   className={finalClassName} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path d="M20 3a1 1 0 0 1 0 2h-16a1 1 0 1 1 0 -2z" />
    <path d="M20 19a1 1 0 0 1 0 2h-16a1 1 0 0 1 0 -2z" />
    <path d="M16 8a3 3 0 0 1 3 3v2a3 3 0 0 1 -3 3h-8a3 3 0 0 1 -3 -3v-2a3 3 0 0 1 3 -3z" />
  </svg>
  );
};

export default IconLayoutDistributeHorizontalFilled;