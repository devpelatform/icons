import React from 'react';

interface IconPhotoMinusProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconPhotoMinus: React.FC<IconPhotoMinusProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-photo-minus ${defaultSize} ${userClassName}`.trim();

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
    <path d="M15 8h.01" />
    <path d="M12.5 21h-6.5a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v9" />
    <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l4 4" />
    <path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l2 2" />
    <path d="M16 19h6" />
  </svg>
  );
};

export default IconPhotoMinus;