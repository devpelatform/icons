import React from 'react';

interface IconBoxOffProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBoxOff: React.FC<IconBoxOffProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-box-off ${defaultSize} ${userClassName}`.trim();

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
    <path d="M17.765 17.757l-5.765 3.243l-8 -4.5v-9l2.236 -1.258m2.57 -1.445l3.194 -1.797l8 4.5v8.5" />
    <path d="M14.561 10.559l5.439 -3.059" />
    <path d="M12 12v9" />
    <path d="M12 12l-8 -4.5" />
    <path d="M3 3l18 18" />
  </svg>
  );
};

export default IconBoxOff;