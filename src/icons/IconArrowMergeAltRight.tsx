import React from 'react';

interface IconArrowMergeAltRightProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconArrowMergeAltRight: React.FC<IconArrowMergeAltRightProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-arrow-merge-alt-right ${defaultSize} ${userClassName}`.trim();

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
    <path d="M16 7l-4 -4l-4 4" />
    <path d="M6 21v.01" />
    <path d="M6 18.01v.01" />
    <path d="M7 15.02v.01" />
    <path d="M10 13.03v.01" />
    <path d="M12 3v5.394a6.737 6.737 0 0 0 3 5.606a6.737 6.737 0 0 1 3 5.606v1.394" />
  </svg>
  );
};

export default IconArrowMergeAltRight;