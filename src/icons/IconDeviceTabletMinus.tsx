import React from 'react';

interface IconDeviceTabletMinusProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconDeviceTabletMinus: React.FC<IconDeviceTabletMinusProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-device-tablet-minus ${defaultSize} ${userClassName}`.trim();

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
    <path d="M12.5 21h-6.5a1 1 0 0 1 -1 -1v-16a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v11" />
    <path d="M12.872 16.51a1 1 0 1 0 -.872 1.49" />
    <path d="M16 19h6" />
  </svg>
  );
};

export default IconDeviceTabletMinus;