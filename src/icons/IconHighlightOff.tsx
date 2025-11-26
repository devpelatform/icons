import React from 'react';

interface IconHighlightOffProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconHighlightOff: React.FC<IconHighlightOffProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-highlight-off ${defaultSize} ${userClassName}`.trim();

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
    <path d="M9 9l-6 6v4h4l6 -6m2 -2l2.503 -2.503a2.828 2.828 0 1 0 -4 -4l-2.497 2.497" />
    <path d="M12.5 5.5l4 4" />
    <path d="M4.5 13.5l4 4" />
    <path d="M19 15h2v2m-2 2h-6l3 -3" />
    <path d="M3 3l18 18" />
  </svg>
  );
};

export default IconHighlightOff;