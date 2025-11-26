import React from 'react';

interface IconRegisteredFilledProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconRegisteredFilled: React.FC<IconRegisteredFilledProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-registered-filled ${defaultSize} ${userClassName}`.trim();

  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
   className={finalClassName} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path d="M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336m-5 4.66h-2a1 1 0 0 0 -1 1v6a1 1 0 0 0 1 1l.117 -.007a1 1 0 0 0 .883 -.993v-1h.585l1.708 1.707a1 1 0 0 0 1.414 -1.414l-.9 -.899a3 3 0 0 0 -1.807 -5.394m0 2a1 1 0 0 1 0 2h-1v-2z" />
  </svg>
  );
};

export default IconRegisteredFilled;