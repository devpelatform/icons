import React from 'react';

interface IconPlayCard8FilledProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconPlayCard8Filled: React.FC<IconPlayCard8FilledProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-play-card-8-filled ${defaultSize} ${userClassName}`.trim();

  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
   className={finalClassName} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path d="M17 2a3 3 0 0 1 3 3v14a3 3 0 0 1 -3 3h-10a3 3 0 0 1 -3 -3v-14a3 3 0 0 1 3 -3zm.01 16h-.01a1 1 0 0 0 -.117 1.993l.127 .007a1 1 0 0 0 0 -2m-4.01 -10h-2a2 2 0 0 0 -2 2v1c0 .365 .098 .707 .268 1.001c-.17 .293 -.268 .635 -.268 .999v1a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-1a2 2 0 0 0 -.268 -1c.17 -.293 .268 -.635 .268 -1v-1a2 2 0 0 0 -2 -2m0 5v1h-2v-1zm0 -3v1h-2v-1zm-5.99 -6h-.01a1 1 0 0 0 -.117 1.993l.127 .007a1 1 0 1 0 0 -2" />
  </svg>
  );
};

export default IconPlayCard8Filled;