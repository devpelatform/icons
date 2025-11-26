import React from 'react';

interface IconHandFingerLeftProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconHandFingerLeft: React.FC<IconHandFingerLeftProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-hand-finger-left ${defaultSize} ${userClassName}`.trim();

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
    <path d="M12 8h-8.5a1.5 1.5 0 0 0 0 3h7.5" />
    <path d="M10.5 11h-2a1.5 1.5 0 1 0 0 3h2.5" />
    <path d="M9.5 14a1.5 1.5 0 0 0 0 3h1.5" />
    <path d="M10.5 17a1.5 1.5 0 0 0 0 3h4.5a6 6 0 0 0 6 -6v-2v.208a6 6 0 0 0 -2.7 -5.012l-.3 -.196q -.718 -.468 -5.728 -3.286a1.5 1.5 0 0 0 -2.022 .536a1.87 1.87 0 0 0 .28 2.28l1.47 1.47" />
  </svg>
  );
};

export default IconHandFingerLeft;