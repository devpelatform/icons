import React from 'react';

interface IconPackageOffProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconPackageOff: React.FC<IconPackageOffProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-package-off ${defaultSize} ${userClassName}`.trim();

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
    <path d="M8.812 4.793l3.188 -1.793l8 4.5v8.5m-2.282 1.784l-5.718 3.216l-8 -4.5v-9l2.223 -1.25" />
    <path d="M14.543 10.57l5.457 -3.07" />
    <path d="M12 12v9" />
    <path d="M12 12l-8 -4.5" />
    <path d="M16 5.25l-4.35 2.447m-2.564 1.442l-1.086 .611" />
    <path d="M3 3l18 18" />
  </svg>
  );
};

export default IconPackageOff;