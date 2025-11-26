import React from 'react';

interface IconAtomOffProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconAtomOff: React.FC<IconAtomOffProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-atom-off ${defaultSize} ${userClassName}`.trim();

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
    <path d="M12 12v.01" />
    <path d="M9.172 9.172c-3.906 3.905 -5.805 8.337 -4.243 9.9c1.562 1.561 6 -.338 9.9 -4.244m1.884 -2.113c2.587 -3.277 3.642 -6.502 2.358 -7.786c-1.284 -1.284 -4.508 -.23 -7.784 2.357" />
    <path d="M4.929 4.929c-1.562 1.562 .337 6 4.243 9.9c3.905 3.905 8.337 5.804 9.9 4.242m-.072 -4.071c-.767 -1.794 -2.215 -3.872 -4.172 -5.828c-1.944 -1.945 -4.041 -3.402 -5.828 -4.172" />
    <path d="M3 3l18 18" />
  </svg>
  );
};

export default IconAtomOff;