import React from 'react';

interface IconArrowSharpTurnRightProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconArrowSharpTurnRight: React.FC<IconArrowSharpTurnRightProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-arrow-sharp-turn-right ${defaultSize} ${userClassName}`.trim();

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
    <path d="M7 18v-11.31a.7 .7 0 0 1 1.195 -.495l9.805 9.805" />
    <path d="M13 16h5v-5" />
  </svg>
  );
};

export default IconArrowSharpTurnRight;