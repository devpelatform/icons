import React from 'react';

interface IconBookDownloadProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBookDownload: React.FC<IconBookDownloadProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-book-download ${defaultSize} ${userClassName}`.trim();

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
    <path d="M12 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12v5" />
    <path d="M13 16h-7a2 2 0 0 0 -2 2" />
    <path d="M15 19l3 3l3 -3" />
    <path d="M18 22v-9" />
  </svg>
  );
};

export default IconBookDownload;