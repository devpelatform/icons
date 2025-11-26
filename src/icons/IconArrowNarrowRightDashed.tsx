import React from 'react';

interface IconArrowNarrowRightDashedProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconArrowNarrowRightDashed: React.FC<IconArrowNarrowRightDashedProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-arrow-narrow-right-dashed ${defaultSize} ${userClassName}`.trim();

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
    <path d="M5 12h.5m3 0h1.5m3 0h6" />
    <path d="M15 16l4 -4" />
    <path d="M15 8l4 4" />
  </svg>
  );
};

export default IconArrowNarrowRightDashed;