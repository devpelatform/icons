import React from 'react';

interface IconBuildingBridgeProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBuildingBridge: React.FC<IconBuildingBridgeProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-building-bridge ${defaultSize} ${userClassName}`.trim();

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
    <path d="M6 5l0 14" />
    <path d="M18 5l0 14" />
    <path d="M2 15l20 0" />
    <path d="M3 8a7.5 7.5 0 0 0 3 -2a6.5 6.5 0 0 0 12 0a7.5 7.5 0 0 0 3 2" />
    <path d="M12 10l0 5" />
  </svg>
  );
};

export default IconBuildingBridge;