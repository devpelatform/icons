import React from 'react';

interface IconFishOffProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconFishOff: React.FC<IconFishOffProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-fish-off ${defaultSize} ${userClassName}`.trim();

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
    <path d="M16.69 7.44a6.973 6.973 0 0 0 -1.63 3.635" />
    <path d="M2 9.504c5.307 5.948 10.293 8.57 14.597 7.1m2.583 -1.449c.988 -.788 1.93 -1.836 2.82 -3.153c-3 -4.443 -6.596 -5.812 -10.564 -4.548m-2.764 1.266c-2.145 1.266 -4.378 3.215 -6.672 5.786" />
    <path d="M18 11v.01" />
    <path d="M11.153 11.169c-.287 .777 -.171 1.554 .347 2.331" />
    <path d="M3 3l18 18" />
  </svg>
  );
};

export default IconFishOff;