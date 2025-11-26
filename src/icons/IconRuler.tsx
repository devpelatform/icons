import React from 'react';

interface IconRulerProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconRuler: React.FC<IconRulerProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-ruler ${defaultSize} ${userClassName}`.trim();

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
    <path d="M5 4h14a1 1 0 0 1 1 1v5a1 1 0 0 1 -1 1h-7a1 1 0 0 0 -1 1v7a1 1 0 0 1 -1 1h-5a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1" />
    <path d="M4 8l2 0" />
    <path d="M4 12l3 0" />
    <path d="M4 16l2 0" />
    <path d="M8 4l0 2" />
    <path d="M12 4l0 3" />
    <path d="M16 4l0 2" />
  </svg>
  );
};

export default IconRuler;