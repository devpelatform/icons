import React from 'react';

interface IconIroningSteamOffProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconIroningSteamOff: React.FC<IconIroningSteamOffProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-ironing-steam-off ${defaultSize} ${userClassName}`.trim();

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
    <path d="M9 4h7.459a3 3 0 0 1 2.959 2.507l.577 3.464l.81 4.865a1 1 0 0 1 -.821 1.15" />
    <path d="M16 16h-13a7 7 0 0 1 6.056 -6.937" />
    <path d="M13 9h6.8" />
    <path d="M12 19v2" />
    <path d="M8 19l-1 2" />
    <path d="M16 19l1 2" />
    <path d="M3 3l18 18" />
  </svg>
  );
};

export default IconIroningSteamOff;