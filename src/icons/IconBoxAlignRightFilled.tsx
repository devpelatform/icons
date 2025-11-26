import React from 'react';

interface IconBoxAlignRightFilledProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBoxAlignRightFilled: React.FC<IconBoxAlignRightFilledProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-box-align-right-filled ${defaultSize} ${userClassName}`.trim();

  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
   className={finalClassName} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path d="M18.998 3.003h-5a1 1 0 0 0 -1 1v16a1 1 0 0 0 1 1h5a2 2 0 0 0 2 -2v-14a2 2 0 0 0 -2 -2z" />
    <path d="M9.008 19.003a1 1 0 0 1 .117 1.993l-.127 .007a1 1 0 0 1 -.117 -1.993l.127 -.007z" />
    <path d="M4.008 19.003a1 1 0 0 1 .117 1.993l-.128 .007a1 1 0 0 1 -.117 -1.993l.128 -.007z" />
    <path d="M4.008 14.002a1 1 0 0 1 .117 1.993l-.128 .007a1 1 0 0 1 -.117 -1.993l.128 -.007z" />
    <path d="M4.008 8.002a1 1 0 0 1 .117 1.993l-.128 .007a1 1 0 0 1 -.117 -1.993l.128 -.007z" />
    <path d="M4.008 3.002a1 1 0 0 1 .117 1.993l-.128 .007a1 1 0 0 1 -.117 -1.993l.128 -.007z" />
    <path d="M9.008 3.002a1 1 0 0 1 .117 1.993l-.127 .007a1 1 0 0 1 -.117 -1.993l.127 -.007z" />
  </svg>
  );
};

export default IconBoxAlignRightFilled;