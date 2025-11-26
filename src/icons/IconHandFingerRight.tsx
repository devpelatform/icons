import React from 'react';

interface IconHandFingerRightProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconHandFingerRight: React.FC<IconHandFingerRightProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-hand-finger-right ${defaultSize} ${userClassName}`.trim();

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
    <path d="M12 8h8.5a1.5 1.5 0 0 1 0 3h-7.5" />
    <path d="M13.5 11h2a1.5 1.5 0 0 1 0 3h-2.5" />
    <path d="M14.5 14a1.5 1.5 0 0 1 0 3h-1.5" />
    <path d="M13.5 17a1.5 1.5 0 1 1 0 3h-4.5a6 6 0 0 1 -6 -6v-2v.208a6 6 0 0 1 2.7 -5.012l.3 -.196q .718 -.468 5.728 -3.286a1.5 1.5 0 0 1 2.022 .536c.44 .734 .325 1.674 -.28 2.28l-1.47 1.47" />
  </svg>
  );
};

export default IconHandFingerRight;