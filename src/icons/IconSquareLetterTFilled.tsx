import React from 'react';

interface IconSquareLetterTFilledProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconSquareLetterTFilled: React.FC<IconSquareLetterTFilledProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-square-letter-t-filled ${defaultSize} ${userClassName}`.trim();

  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
   className={finalClassName} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path d="M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-14a3 3 0 0 1 3 -3zm-5 5h-4a1 1 0 1 0 0 2h1v7a1 1 0 0 0 .883 .993l.117 .007a1 1 0 0 0 1 -1v-7h1a1 1 0 0 0 .993 -.883l.007 -.117a1 1 0 0 0 -1 -1" />
  </svg>
  );
};

export default IconSquareLetterTFilled;