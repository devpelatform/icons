import React from 'react';

interface IconTrainProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconTrain: React.FC<IconTrainProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-train ${defaultSize} ${userClassName}`.trim();

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
    <path d="M21 13c0 -3.87 -3.37 -7 -10 -7h-8" />
    <path d="M3 15h16a2 2 0 0 0 2 -2" />
    <path d="M3 6v5h17.5" />
    <path d="M3 11v4" />
    <path d="M8 11v-5" />
    <path d="M13 11v-4.5" />
    <path d="M3 19h18" />
  </svg>
  );
};

export default IconTrain;