import React from 'react';

interface IconBrandSketchFilledProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBrandSketchFilled: React.FC<IconBrandSketchFilledProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-brand-sketch-filled ${defaultSize} ${userClassName}`.trim();

  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
   className={finalClassName} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path d="M7.554 3.004h8.929a2 2 0 0 1 1.647 .873l3.536 5.193a2.006 2.006 0 0 1 -.173 2.48l-8 8.79a2.007 2.007 0 0 1 -2.97 0l-8 -8.789a1 1 0 0 1 -.13 -.175l-.012 -.026l-.051 -.072a2.01 2.01 0 0 1 -.056 -2.063l.09 -.146l3.541 -5.193c.372 -.544 .987 -.87 1.649 -.872" />
  </svg>
  );
};

export default IconBrandSketchFilled;