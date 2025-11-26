import React from 'react';

interface IconArrowBarToUpDashedProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconArrowBarToUpDashed: React.FC<IconArrowBarToUpDashedProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-arrow-bar-to-up-dashed ${defaultSize} ${userClassName}`.trim();

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
    <path d="M12 10v10" />
    <path d="M12 10l4 4" />
    <path d="M12 10l-4 4" />
    <path d="M4 4h3m13 0h-3m-3.5 0h-3" />
  </svg>
  );
};

export default IconArrowBarToUpDashed;