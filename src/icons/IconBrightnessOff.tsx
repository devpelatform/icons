import React from 'react';

interface IconBrightnessOffProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBrightnessOff: React.FC<IconBrightnessOffProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-brightness-off ${defaultSize} ${userClassName}`.trim();

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
    <path d="M12 3v5m0 4v9" />
    <path d="M5.641 5.631a9 9 0 1 0 12.719 12.738m1.68 -2.318a9 9 0 0 0 -12.074 -12.098" />
    <path d="M12.5 8.5l4.15 -4.15" />
    <path d="M12 14l1.025 -.983m2.065 -1.981l4.28 -4.106" />
    <path d="M12 19.6l3.79 -3.79m2 -2l3.054 -3.054" />
    <path d="M3 3l18 18" />
  </svg>
  );
};

export default IconBrightnessOff;