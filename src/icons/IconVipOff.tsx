import React from 'react';

interface IconVipOffProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconVipOff: React.FC<IconVipOffProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-vip-off ${defaultSize} ${userClassName}`.trim();

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
    <path d="M3 5h2m4 0h12" />
    <path d="M3 19h16" />
    <path d="M4 9l2 6h1l2 -6" />
    <path d="M12 12v3" />
    <path d="M16 12v-3h2a2 2 0 1 1 0 4h-1" />
    <path d="M3 3l18 18" />
  </svg>
  );
};

export default IconVipOff;