import React from 'react';

interface IconCertificate2OffProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconCertificate2Off: React.FC<IconCertificate2OffProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-certificate-2-off ${defaultSize} ${userClassName}`.trim();

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
    <path d="M12 12a3 3 0 1 0 3 3" />
    <path d="M11 7h3" />
    <path d="M10 18v4l2 -1l2 1v-4" />
    <path d="M10 19h-2a2 2 0 0 1 -2 -2v-11m1.18 -2.825c.25 -.112 .529 -.175 .82 -.175h8a2 2 0 0 1 2 2v9m-.175 3.82a2 2 0 0 1 -1.825 1.18h-2" />
    <path d="M3 3l18 18" />
  </svg>
  );
};

export default IconCertificate2Off;