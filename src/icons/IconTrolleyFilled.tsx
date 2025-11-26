import React from 'react';

interface IconTrolleyFilledProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconTrolleyFilled: React.FC<IconTrolleyFilledProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-trolley-filled ${defaultSize} ${userClassName}`.trim();

  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
   className={finalClassName} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path d="M20.555 4.168a1 1 0 0 1 .277 1.387l-2.621 3.932l1.236 .619a1 1 0 0 1 -.894 1.788l-1.46 -.73l-3.876 5.815a3 3 0 1 1 -5.217 2.021l.005 -.176q .008 -.135 .027 -.267l-2.587 -1.725a1 1 0 0 1 1.11 -1.664l2.424 1.615a2.99 2.99 0 0 1 2.464 -.75l7.725 -11.588a1 1 0 0 1 1.387 -.277m-10.567 -.399l.14 .082l3.307 2.104a2.3 2.3 0 0 1 .7 3.185l-3.094 4.81a2.3 2.3 0 0 1 -3.17 .698l-3.306 -2.104a2.3 2.3 0 0 1 -.7 -3.185l3.094 -4.81a2.3 2.3 0 0 1 3.029 -.78" />
  </svg>
  );
};

export default IconTrolleyFilled;