import React from 'react';

interface IconArrowsVerticalProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconArrowsVertical: React.FC<IconArrowsVerticalProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-arrows-vertical ${defaultSize} ${userClassName}`.trim();

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
    <path d="M8 7l4 -4l4 4" />
    <path d="M8 17l4 4l4 -4" />
    <path d="M12 3l0 18" />
  </svg>
  );
};

export default IconArrowsVertical;