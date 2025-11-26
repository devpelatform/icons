import React from 'react';

interface IconFlipVerticalProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconFlipVertical: React.FC<IconFlipVerticalProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-flip-vertical ${defaultSize} ${userClassName}`.trim();

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
    <path d="M12 3l0 18" />
    <path d="M16 7l0 10l5 0l-5 -10" />
    <path d="M8 7l0 10l-5 0l5 -10" />
  </svg>
  );
};

export default IconFlipVertical;