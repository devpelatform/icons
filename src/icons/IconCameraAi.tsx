import React from 'react';

interface IconCameraAiProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconCameraAi: React.FC<IconCameraAiProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-camera-ai ${defaultSize} ${userClassName}`.trim();

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
    <path d="M10 20h-5a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v2" />
    <path d="M14.362 11.15a3 3 0 1 0 -4.144 4.263" />
    <path d="M14 21v-4a2 2 0 1 1 4 0v4" />
    <path d="M14 19h4" />
    <path d="M21 15v6" />
  </svg>
  );
};

export default IconCameraAi;