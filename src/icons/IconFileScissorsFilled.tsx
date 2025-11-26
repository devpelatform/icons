import React from 'react';

interface IconFileScissorsFilledProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconFileScissorsFilled: React.FC<IconFileScissorsFilledProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-file-scissors-filled ${defaultSize} ${userClassName}`.trim();

  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
   className={finalClassName} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path d="M12 2l.117 .007a1 1 0 0 1 .876 .876l.007 .117v4l.005 .15a2 2 0 0 0 1.838 1.844l.157 .006h4l.117 .007a1 1 0 0 1 .876 .876l.007 .117v9a3 3 0 0 1 -2.824 2.995l-.176 .005h-10a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-14a3 3 0 0 1 2.824 -2.995l.176 -.005zm-2.293 9.293a1 1 0 1 0 -1.414 1.414l2.292 2.293l-1.068 1.067a2.003 2.003 0 0 0 -2.512 1.784l-.005 .149a2 2 0 1 0 3.933 -.516l1.067 -1.069l1.067 1.068a2 2 0 0 0 -.062 .368l-.005 .149a2 2 0 1 0 1.484 -1.933l-1.069 -1.067l2.292 -2.293a1 1 0 0 0 -1.414 -1.414l-2.293 2.292z" />
    <path d="M19 7h-4l-.001 -4.001z" />
  </svg>
  );
};

export default IconFileScissorsFilled;