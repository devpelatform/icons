import React from 'react';

interface IconPrismLightProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconPrismLight: React.FC<IconPrismLightProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-prism-light ${defaultSize} ${userClassName}`.trim();

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
    <path d="M4.731 19h11.539a1 1 0 0 0 .866 -1.5l-5.769 -10a1 1 0 0 0 -1.732 0l-5.769 10a1 1 0 0 0 .865 1.5" />
    <path d="M2 13h4.45" />
    <path d="M18 5l-4.5 6" />
    <path d="M22 9l-7.75 3.25" />
    <path d="M22 15l-7 -1.5" />
  </svg>
  );
};

export default IconPrismLight;