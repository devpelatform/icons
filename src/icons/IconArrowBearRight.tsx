import React from 'react';

interface IconArrowBearRightProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconArrowBearRight: React.FC<IconArrowBearRightProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-arrow-bear-right ${defaultSize} ${userClassName}`.trim();

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
    <path d="M12 3h5v5" />
    <path d="M17 3l-7.536 7.536a5 5 0 0 0 -1.464 3.534v6.93" />
  </svg>
  );
};

export default IconArrowBearRight;