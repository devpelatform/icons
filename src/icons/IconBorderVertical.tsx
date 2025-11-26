import React from 'react';

interface IconBorderVerticalProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBorderVertical: React.FC<IconBorderVerticalProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-border-vertical ${defaultSize} ${userClassName}`.trim();

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
    <path d="M12 4l0 16" />
    <path d="M4 4l0 .01" />
    <path d="M8 4l0 .01" />
    <path d="M16 4l0 .01" />
    <path d="M20 4l0 .01" />
    <path d="M4 8l0 .01" />
    <path d="M20 8l0 .01" />
    <path d="M4 12l0 .01" />
    <path d="M8 12l0 .01" />
    <path d="M16 12l0 .01" />
    <path d="M20 12l0 .01" />
    <path d="M4 16l0 .01" />
    <path d="M20 16l0 .01" />
    <path d="M4 20l0 .01" />
    <path d="M8 20l0 .01" />
    <path d="M16 20l0 .01" />
    <path d="M20 20l0 .01" />
  </svg>
  );
};

export default IconBorderVertical;