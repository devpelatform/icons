import React from 'react';

interface IconCirclesRelationProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconCirclesRelation: React.FC<IconCirclesRelationProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-circles-relation ${defaultSize} ${userClassName}`.trim();

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
    <path d="M9.183 6.117a6 6 0 1 0 4.511 3.986" />
    <path d="M14.813 17.883a6 6 0 1 0 -4.496 -3.954" />
  </svg>
  );
};

export default IconCirclesRelation;