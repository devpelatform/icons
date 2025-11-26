import React from 'react';

interface IconFileDeltaFilledProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconFileDeltaFilled: React.FC<IconFileDeltaFilledProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-file-delta-filled ${defaultSize} ${userClassName}`.trim();

  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
   className={finalClassName} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path d="M12 2l.117 .007a1 1 0 0 1 .876 .876l.007 .117v4l.005 .15a2 2 0 0 0 1.838 1.844l.157 .006h4l.117 .007a1 1 0 0 1 .876 .876l.007 .117v9a3 3 0 0 1 -2.824 2.995l-.176 .005h-10a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-14a3 3 0 0 1 2.824 -2.995l.176 -.005zm.894 8.553a1 1 0 0 0 -1.788 0l-3 6a1 1 0 0 0 .894 1.447h6a1 1 0 0 0 .894 -1.447zm-.894 2.683l1.381 2.764h-2.763zm2.999 -10.237l4.001 4.001h-4z" />
  </svg>
  );
};

export default IconFileDeltaFilled;