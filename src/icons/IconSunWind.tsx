import React from 'react';

interface IconSunWindProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconSunWind: React.FC<IconSunWindProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-sun-wind ${defaultSize} ${userClassName}`.trim();

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
    <path d="M14.468 10a4 4 0 1 0 -5.466 5.46" />
    <path d="M2 12h1" />
    <path d="M11 3v1" />
    <path d="M11 20v1" />
    <path d="M4.6 5.6l.7 .7" />
    <path d="M17.4 5.6l-.7 .7" />
    <path d="M5.3 17.7l-.7 .7" />
    <path d="M15 13h5a2 2 0 1 0 0 -4" />
    <path d="M12 16h5.714l.253 0a2 2 0 0 1 2.033 2a2 2 0 0 1 -2 2h-.286" />
  </svg>
  );
};

export default IconSunWind;