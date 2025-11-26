import React from 'react';

interface IconLetterRProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconLetterR: React.FC<IconLetterRProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-letter-r ${defaultSize} ${userClassName}`.trim();

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
    <path d="M7 20v-16h5.5a4 4 0 0 1 0 9h-5.5" />
    <path d="M12 13l5 7" />
  </svg>
  );
};

export default IconLetterR;