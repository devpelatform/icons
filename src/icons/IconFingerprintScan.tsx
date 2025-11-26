import React from 'react';

interface IconFingerprintScanProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconFingerprintScan: React.FC<IconFingerprintScanProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-fingerprint-scan ${defaultSize} ${userClassName}`.trim();

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
    <path d="M9 11a3 3 0 0 1 6 0c0 1.657 .612 3.082 1 4" />
    <path d="M12 11v1.75c-.001 1.11 .661 2.206 1 3.25" />
    <path d="M9 14.25c.068 .58 .358 1.186 .5 1.75" />
    <path d="M4 8v-2a2 2 0 0 1 2 -2h2" />
    <path d="M4 16v2a2 2 0 0 0 2 2h2" />
    <path d="M16 4h2a2 2 0 0 1 2 2v2" />
    <path d="M16 20h2a2 2 0 0 0 2 -2v-2" />
  </svg>
  );
};

export default IconFingerprintScan;