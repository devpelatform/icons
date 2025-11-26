import React from 'react';

interface IconRecycleProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconRecycle: React.FC<IconRecycleProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-recycle ${defaultSize} ${userClassName}`.trim();

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
    <path d="M12 17l-2 2l2 2" />
    <path d="M10 19h9a2 2 0 0 0 1.75 -2.75l-.55 -1" />
    <path d="M8.536 11l-.732 -2.732l-2.732 .732" />
    <path d="M7.804 8.268l-4.5 7.794a2 2 0 0 0 1.506 2.89l1.141 .024" />
    <path d="M15.464 11l2.732 .732l.732 -2.732" />
    <path d="M18.196 11.732l-4.5 -7.794a2 2 0 0 0 -3.256 -.14l-.591 .976" />
  </svg>
  );
};

export default IconRecycle;