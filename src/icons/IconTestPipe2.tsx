import React from 'react';

interface IconTestPipe2Props {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconTestPipe2: React.FC<IconTestPipe2Props> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-test-pipe-2 ${defaultSize} ${userClassName}`.trim();

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
    <path d="M15 3v15a3 3 0 0 1 -6 0v-15" />
    <path d="M9 12h6" />
    <path d="M8 3h8" />
  </svg>
  );
};

export default IconTestPipe2;