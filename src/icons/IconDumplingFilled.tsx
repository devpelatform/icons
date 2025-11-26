import React from 'react';

interface IconDumplingFilledProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconDumplingFilled: React.FC<IconDumplingFilledProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-dumpling-filled ${defaultSize} ${userClassName}`.trim();

  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
   className={finalClassName} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path d="M10.003 2.04a3.53 3.53 0 0 1 2.602 .62l.09 .07l.149 -.11a3.53 3.53 0 0 1 3.044 -.462l.207 .072a3.53 3.53 0 0 1 1.99 1.903l.014 .031l.045 -.004a3.53 3.53 0 0 1 2.624 .879l.153 .144l.358 .358c1.976 1.977 -.32 6.748 -4.655 11.083c-4.336 4.335 -9.106 6.632 -11.083 4.655l-.382 -.382l-.135 -.145a3.53 3.53 0 0 1 -.87 -2.556l.01 -.1l-.162 -.072a3.53 3.53 0 0 1 -1.838 -2.124l-.055 -.192a3.53 3.53 0 0 1 .56 -2.937l.062 -.079l-.07 -.092a3.53 3.53 0 0 1 -.644 -2.401l.025 -.2a3.53 3.53 0 0 1 1.707 -2.505l.046 -.026l-.005 -.14a3.53 3.53 0 0 1 .885 -2.345l.15 -.16l.159 -.149a3.53 3.53 0 0 1 2.346 -.884l.14 .004l.026 -.046a3.53 3.53 0 0 1 2.308 -1.67z" />
  </svg>
  );
};

export default IconDumplingFilled;