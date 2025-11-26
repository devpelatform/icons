import React from 'react';

interface IconDiscGolfProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconDiscGolf: React.FC<IconDiscGolfProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-disc-golf ${defaultSize} ${userClassName}`.trim();

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
    <path d="M5 5h14" />
    <path d="M6 5c.32 6.744 2.74 9.246 6 10" />
    <path d="M18 5c-.32 6.744 -2.74 9.246 -6 10" />
    <path d="M10 5c0 4.915 .552 7.082 2 10" />
    <path d="M14 5c0 4.915 -.552 7.082 -2 10" />
    <path d="M12 15v6" />
    <path d="M12 3v2" />
    <path d="M7 16c.64 .64 1.509 1 2.414 1h5.172c.905 0 1.774 -.36 2.414 -1" />
    <path d="M11 21h2" />
  </svg>
  );
};

export default IconDiscGolf;