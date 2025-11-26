import React from 'react';

interface IconBookUploadProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBookUpload: React.FC<IconBookUploadProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-book-upload ${defaultSize} ${userClassName}`.trim();

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
    <path d="M14 20h-8a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12v5" />
    <path d="M11 16h-5a2 2 0 0 0 -2 2" />
    <path d="M15 16l3 -3l3 3" />
    <path d="M18 13v9" />
  </svg>
  );
};

export default IconBookUpload;