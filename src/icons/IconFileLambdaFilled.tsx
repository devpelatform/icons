import React from 'react';

interface IconFileLambdaFilledProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconFileLambdaFilled: React.FC<IconFileLambdaFilledProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-file-lambda-filled ${defaultSize} ${userClassName}`.trim();

  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
   className={finalClassName} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path d="M12 2l.117 .007a1 1 0 0 1 .876 .876l.007 .117v4l.005 .15a2 2 0 0 0 1.838 1.844l.157 .006h4l.117 .007a1 1 0 0 1 .876 .876l.007 .117v9a3 3 0 0 1 -2.824 2.995l-.176 .005h-10a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-14a3 3 0 0 1 2.824 -2.995l.176 -.005zm-2 8a1 1 0 0 0 -.117 1.993l.117 .007c.342 0 .662 .362 1.166 1.445l-1.998 3a1 1 0 0 0 1.664 1.11l1.29 -1.934c.825 1.738 1.508 2.379 2.878 2.379a1 1 0 0 0 .117 -1.993l-.117 -.007c-.39 0 -.75 -.47 -1.387 -1.938l-.415 -.976c-.985 -2.274 -1.656 -3.086 -3.198 -3.086m4.999 -7.001l4.001 4.001h-4z" />
  </svg>
  );
};

export default IconFileLambdaFilled;