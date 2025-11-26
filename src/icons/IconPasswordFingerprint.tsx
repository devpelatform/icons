import React from 'react';

interface IconPasswordFingerprintProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconPasswordFingerprint: React.FC<IconPasswordFingerprintProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-password-fingerprint ${defaultSize} ${userClassName}`.trim();

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
    <path d="M17 8c.788 1 1 2 1 3v1" />
    <path d="M9 11c0 -1.578 1.343 -3 3 -3s3 1.422 3 3v2" />
    <path d="M12 11v2" />
    <path d="M6 12v-1.397c-.006 -1.999 1.136 -3.849 2.993 -4.85a6.385 6.385 0 0 1 6.007 -.005" />
    <path d="M12 17v4" />
    <path d="M10 20l4 -2" />
    <path d="M10 18l4 2" />
    <path d="M5 17v4" />
    <path d="M3 20l4 -2" />
    <path d="M3 18l4 2" />
    <path d="M19 17v4" />
    <path d="M17 20l4 -2" />
    <path d="M17 18l4 2" />
  </svg>
  );
};

export default IconPasswordFingerprint;