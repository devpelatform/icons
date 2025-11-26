import React from 'react';

interface IconBuildingBankProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBuildingBank: React.FC<IconBuildingBankProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-building-bank ${defaultSize} ${userClassName}`.trim();

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
    <path d="M3 21l18 0" />
    <path d="M3 10l18 0" />
    <path d="M5 6l7 -3l7 3" />
    <path d="M4 10l0 11" />
    <path d="M20 10l0 11" />
    <path d="M8 14l0 3" />
    <path d="M12 14l0 3" />
    <path d="M16 14l0 3" />
  </svg>
  );
};

export default IconBuildingBank;