import React from 'react';

interface IconRewindForward15Props {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconRewindForward15: React.FC<IconRewindForward15Props> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-rewind-forward-15 ${defaultSize} ${userClassName}`.trim();

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
    <path d="M17 9l3 -3l-3 -3" />
    <path d="M9 18a6 6 0 1 1 0 -12h11" />
    <path d="M16 20h2a1 1 0 0 0 1 -1v-1a1 1 0 0 0 -1 -1h-2v-3h3" />
    <path d="M13 14v6" />
  </svg>
  );
};

export default IconRewindForward15;