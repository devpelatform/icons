import React from 'react';

interface IconWorldUploadProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconWorldUpload: React.FC<IconWorldUploadProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-world-upload ${defaultSize} ${userClassName}`.trim();

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
    <path d="M21 12a9 9 0 1 0 -9 9" />
    <path d="M3.6 9h16.8" />
    <path d="M3.6 15h8.4" />
    <path d="M11.578 3a17 17 0 0 0 0 18" />
    <path d="M12.5 3c1.719 2.755 2.5 5.876 2.5 9" />
    <path d="M18 21v-7m3 3l-3 -3l-3 3" />
  </svg>
  );
};

export default IconWorldUpload;