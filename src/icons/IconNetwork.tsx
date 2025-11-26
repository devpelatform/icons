import React from 'react';

interface IconNetworkProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconNetwork: React.FC<IconNetworkProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-network ${defaultSize} ${userClassName}`.trim();

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
    <path d="M6 9a6 6 0 1 0 12 0a6 6 0 0 0 -12 0" />
    <path d="M12 3c1.333 .333 2 2.333 2 6s-.667 5.667 -2 6" />
    <path d="M12 3c-1.333 .333 -2 2.333 -2 6s.667 5.667 2 6" />
    <path d="M6 9h12" />
    <path d="M3 20h7" />
    <path d="M14 20h7" />
    <path d="M10 20a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
    <path d="M12 15v3" />
  </svg>
  );
};

export default IconNetwork;