import React from 'react';

interface IconCircleChevronsUpFilledProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconCircleChevronsUpFilled: React.FC<IconCircleChevronsUpFilledProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-circle-chevrons-up-filled ${defaultSize} ${userClassName}`.trim();

  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
   className={finalClassName} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path d="M11.867 2.001c5.495 0 9.96 4.432 10 9.926s-4.359 9.993 -9.852 10.073h-.295c-5.493 -.081 -9.893 -4.579 -9.852 -10.073c.04 -5.494 4.505 -9.926 10 -9.926m.84 9.292a1 1 0 0 0 -1.414 0l-3 3a1 1 0 0 0 0 1.414l.094 .083a1 1 0 0 0 1.32 -.083l2.292 -2.292l2.293 2.292a1 1 0 0 0 1.414 -1.414zm0 -4a1 1 0 0 0 -1.414 0l-3 3a1 1 0 0 0 0 1.414l.094 .083a1 1 0 0 0 1.32 -.083l2.292 -2.292l2.293 2.292a1 1 0 0 0 1.414 -1.414z" />
  </svg>
  );
};

export default IconCircleChevronsUpFilled;