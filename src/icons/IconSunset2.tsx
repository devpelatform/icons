import React from 'react';

interface IconSunset2Props {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconSunset2: React.FC<IconSunset2Props> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-sunset-2 ${defaultSize} ${userClassName}`.trim();

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
    <path d="M3 13h1" />
    <path d="M20 13h1" />
    <path d="M5.6 6.6l.7 .7" />
    <path d="M18.4 6.6l-.7 .7" />
    <path d="M8 13a4 4 0 1 1 8 0" />
    <path d="M3 17h18" />
    <path d="M7 20h5" />
    <path d="M16 20h1" />
    <path d="M12 5v-1" />
  </svg>
  );
};

export default IconSunset2;