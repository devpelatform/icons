import React from 'react';

interface IconBrandNytimesProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBrandNytimes: React.FC<IconBrandNytimesProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-brand-nytimes ${defaultSize} ${userClassName}`.trim();

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
    <path d="M11.036 5.058a8 8 0 1 0 8.706 9.965" />
    <path d="M12 21v-11l-7.5 4" />
    <path d="M17.5 3a2.5 2.5 0 1 1 0 5l-11 -5a2.5 2.5 0 0 0 -.67 4.91" />
    <path d="M9 12v8" />
    <path d="M16 13h-.01" />
  </svg>
  );
};

export default IconBrandNytimes;