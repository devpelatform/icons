import React from 'react';

interface IconSquareToggleHorizontalProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconSquareToggleHorizontal: React.FC<IconSquareToggleHorizontalProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-square-toggle-horizontal ${defaultSize} ${userClassName}`.trim();

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
    <path d="M22 12h-20" />
    <path d="M4 14v-8a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v8" />
    <path d="M18 20a2 2 0 0 0 2 -2" />
    <path d="M4 18a2 2 0 0 0 2 2" />
    <path d="M14 20l-4 0" />
  </svg>
  );
};

export default IconSquareToggleHorizontal;