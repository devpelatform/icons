import React from 'react';

interface IconFilePowerFilledProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconFilePowerFilled: React.FC<IconFilePowerFilledProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-file-power-filled ${defaultSize} ${userClassName}`.trim();

  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
   className={finalClassName} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path d="M12 2l.117 .007a1 1 0 0 1 .876 .876l.007 .117v4l.005 .15a2 2 0 0 0 1.838 1.844l.157 .006h4l.117 .007a1 1 0 0 1 .876 .876l.007 .117v9a3 3 0 0 1 -2.824 2.995l-.176 .005h-10a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-14a3 3 0 0 1 2.824 -2.995l.176 -.005zm.555 9.168a1 1 0 0 0 -1.387 .277l-2 3l-.057 .097a1 1 0 0 0 .889 1.458h2.13l-.962 1.445a1 1 0 1 0 1.664 1.11l2 -3l.057 -.097a1 1 0 0 0 -.889 -1.458h-2.132l.964 -1.445a1 1 0 0 0 -.277 -1.387" />
    <path d="M19 7h-4l-.001 -4.001z" />
  </svg>
  );
};

export default IconFilePowerFilled;