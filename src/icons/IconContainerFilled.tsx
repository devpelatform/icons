import React from 'react';

interface IconContainerFilledProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconContainerFilled: React.FC<IconContainerFilledProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-container-filled ${defaultSize} ${userClassName}`.trim();

  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
   className={finalClassName} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path d="M20 3a1 1 0 0 1 1 1v.01a1 1 0 0 1 -2 0v-.01a1 1 0 0 1 1 -1" />
    <path d="M20 19a1 1 0 0 1 1 1v.01a1 1 0 0 1 -2 0v-.01a1 1 0 0 1 1 -1" />
    <path d="M20 15a1 1 0 0 1 1 1v.01a1 1 0 0 1 -2 0v-.01a1 1 0 0 1 1 -1" />
    <path d="M20 11a1 1 0 0 1 1 1v.01a1 1 0 0 1 -2 0v-.01a1 1 0 0 1 1 -1" />
    <path d="M20 7a1 1 0 0 1 1 1v.01a1 1 0 0 1 -2 0v-.01a1 1 0 0 1 1 -1" />
    <path d="M15 3a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2z" />
    <path d="M4 3a1 1 0 0 1 1 1v.01a1 1 0 1 1 -2 0v-.01a1 1 0 0 1 1 -1" />
    <path d="M4 19a1 1 0 0 1 1 1v.01a1 1 0 0 1 -2 0v-.01a1 1 0 0 1 1 -1" />
    <path d="M4 15a1 1 0 0 1 1 1v.01a1 1 0 0 1 -2 0v-.01a1 1 0 0 1 1 -1" />
    <path d="M4 11a1 1 0 0 1 1 1v.01a1 1 0 0 1 -2 0v-.01a1 1 0 0 1 1 -1" />
    <path d="M4 7a1 1 0 0 1 1 1v.01a1 1 0 1 1 -2 0v-.01a1 1 0 0 1 1 -1" />
  </svg>
  );
};

export default IconContainerFilled;