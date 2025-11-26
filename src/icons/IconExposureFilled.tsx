import React from 'react';

interface IconExposureFilledProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconExposureFilled: React.FC<IconExposureFilledProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-exposure-filled ${defaultSize} ${userClassName}`.trim();

  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
   className={finalClassName} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path d="M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-14a3 3 0 0 1 3 -3zm0 2h-14a1 1 0 0 0 -1 1v14c0 .29 .123 .55 .321 .732l1.61 -1.584a973 973 0 0 0 6.69 -6.675l7.094 -7.173a1 1 0 0 0 -.715 -.3m-1 11h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0 -2m-10 -10a1 1 0 0 1 1 1v1h1a1 1 0 0 1 .993 .883l.007 .117a1 1 0 0 1 -1 1h-1v1a1 1 0 0 1 -.883 .993l-.117 .007a1 1 0 0 1 -1 -1v-1h-1a1 1 0 0 1 -.993 -.883l-.007 -.117a1 1 0 0 1 1 -1h1v-1a1 1 0 0 1 .883 -.993z" />
  </svg>
  );
};

export default IconExposureFilled;