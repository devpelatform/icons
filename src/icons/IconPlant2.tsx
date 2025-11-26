import React from 'react';

interface IconPlant2Props {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconPlant2: React.FC<IconPlant2Props> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-plant-2 ${defaultSize} ${userClassName}`.trim();

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
    <path d="M2 9a10 10 0 1 0 20 0" />
    <path d="M12 19a10 10 0 0 1 10 -10" />
    <path d="M2 9a10 10 0 0 1 10 10" />
    <path d="M12 4a9.7 9.7 0 0 1 2.99 7.5" />
    <path d="M9.01 11.5a9.7 9.7 0 0 1 2.99 -7.5" />
  </svg>
  );
};

export default IconPlant2;