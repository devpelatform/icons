import React from 'react';

interface IconBrandSpeedtestProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBrandSpeedtest: React.FC<IconBrandSpeedtestProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-brand-speedtest ${defaultSize} ${userClassName}`.trim();

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
    <path d="M5.636 19.364a9 9 0 1 1 12.728 0" />
    <path d="M16 9l-4 4" />
  </svg>
  );
};

export default IconBrandSpeedtest;