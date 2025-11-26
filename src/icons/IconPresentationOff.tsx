import React from 'react';

interface IconPresentationOffProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconPresentationOff: React.FC<IconPresentationOffProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-presentation-off ${defaultSize} ${userClassName}`.trim();

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
    <path d="M3 4h1m4 0h13" />
    <path d="M4 4v10a2 2 0 0 0 2 2h10m3.42 -.592c.359 -.362 .58 -.859 .58 -1.408v-10" />
    <path d="M12 16v4" />
    <path d="M9 20h6" />
    <path d="M8 12l2 -2m4 0l2 -2" />
    <path d="M3 3l18 18" />
  </svg>
  );
};

export default IconPresentationOff;