import React from 'react';

interface IconMovieOffProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconMovieOff: React.FC<IconMovieOffProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-movie-off ${defaultSize} ${userClassName}`.trim();

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
    <path d="M8 4h10a2 2 0 0 1 2 2v10m-.592 3.42c-.362 .359 -.859 .58 -1.408 .58h-12a2 2 0 0 1 -2 -2v-12c0 -.539 .213 -1.028 .56 -1.388" />
    <path d="M8 8v12" />
    <path d="M16 4v8m0 4v4" />
    <path d="M4 8h4" />
    <path d="M4 16h4" />
    <path d="M4 12h8m4 0h4" />
    <path d="M16 8h4" />
    <path d="M3 3l18 18" />
  </svg>
  );
};

export default IconMovieOff;