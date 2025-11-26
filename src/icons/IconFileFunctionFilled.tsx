import React from 'react';

interface IconFileFunctionFilledProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconFileFunctionFilled: React.FC<IconFileFunctionFilledProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-file-function-filled ${defaultSize} ${userClassName}`.trim();

  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
   className={finalClassName} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path d="M12 2l.117 .007a1 1 0 0 1 .876 .876l.007 .117v4l.005 .15a2 2 0 0 0 1.838 1.844l.157 .006h4l.117 .007a1 1 0 0 1 .876 .876l.007 .117v9a3 3 0 0 1 -2.824 2.995l-.176 .005h-10a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-14a3 3 0 0 1 2.824 -2.995l.176 -.005zm1.5 9h-.333l-.16 .006c-.895 .07 -1.65 .732 -1.75 1.63l-.152 1.364h-.605a1 1 0 0 0 0 2h.382l-.111 1h-.271a1 1 0 0 0 0 2h.333l.16 -.006c.896 -.071 1.652 -.733 1.75 -1.632l.151 -1.362h.606a1 1 0 0 0 0 -2h-.383l.111 -1h.272a1 1 0 0 0 0 -2" />
    <path d="M19 7h-4l-.001 -4.001z" />
  </svg>
  );
};

export default IconFileFunctionFilled;