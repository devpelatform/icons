import React from 'react';

interface IconPlayCard9FilledProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconPlayCard9Filled: React.FC<IconPlayCard9FilledProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-play-card-9-filled ${defaultSize} ${userClassName}`.trim();

  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
   className={finalClassName} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path d="M17 2a3 3 0 0 1 3 3v14a3 3 0 0 1 -3 3h-10a3 3 0 0 1 -3 -3v-14a3 3 0 0 1 3 -3zm.01 16h-.01a1 1 0 0 0 0 2h.01a1 1 0 0 0 0 -2m-4.01 -10h-2a2 2 0 0 0 -2 2v1l.005 .15a2 2 0 0 0 1.995 1.85h2v1h-3a1 1 0 0 0 0 2h3a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2m0 2v1h-2v-1zm-5.99 -6h-.01a1 1 0 1 0 0 2h.01a1 1 0 1 0 0 -2" />
  </svg>
  );
};

export default IconPlayCard9Filled;