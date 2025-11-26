import React from 'react';

interface IconUserScreenProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconUserScreen: React.FC<IconUserScreenProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-user-screen ${defaultSize} ${userClassName}`.trim();

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
    <path d="M19.03 17.818a3 3 0 0 0 1.97 -2.818v-8a3 3 0 0 0 -3 -3h-12a3 3 0 0 0 -3 3v8c0 1.317 .85 2.436 2.03 2.84" />
    <path d="M10 14a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
    <path d="M8 21a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2" />
  </svg>
  );
};

export default IconUserScreen;