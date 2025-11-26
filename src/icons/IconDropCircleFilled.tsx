import React from 'react';

interface IconDropCircleFilledProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconDropCircleFilled: React.FC<IconDropCircleFilledProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-drop-circle-filled ${defaultSize} ${userClassName}`.trim();

  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
   className={finalClassName} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path d="M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336m-4.177 4.092a1 1 0 0 0 -1.646 0l-2.602 3.764c-1.022 1.67 -.634 3.736 .875 4.929a4.144 4.144 0 0 0 5.095 0c1.51 -1.191 1.897 -3.26 .904 -4.882z" />
  </svg>
  );
};

export default IconDropCircleFilled;