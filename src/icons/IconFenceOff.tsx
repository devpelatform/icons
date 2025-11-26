import React from 'react';

interface IconFenceOffProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconFenceOff: React.FC<IconFenceOffProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-fence-off ${defaultSize} ${userClassName}`.trim();

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
    <path d="M12 12h-8v4h12m4 0v-4h-4" />
    <path d="M6 16v4h4v-4" />
    <path d="M10 12v-2m0 -4l-2 -2m-2 2v6" />
    <path d="M14 16v4h4v-2" />
    <path d="M18 12v-6l-2 -2l-2 2v4" />
    <path d="M3 3l18 18" />
  </svg>
  );
};

export default IconFenceOff;