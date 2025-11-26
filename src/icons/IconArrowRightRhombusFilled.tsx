import React from 'react';

interface IconArrowRightRhombusFilledProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconArrowRightRhombusFilled: React.FC<IconArrowRightRhombusFilledProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-arrow-right-rhombus-filled ${defaultSize} ${userClassName}`.trim();

  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
   className={finalClassName} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path d="M18.707 8.293l3 3l.097 .112l.071 .11l.031 .062l.034 .081l.024 .076l.03 .148l.006 .118l-.004 .085l-.016 .116l-.03 .111l-.044 .111l-.052 .098l-.074 .104l-.073 .082l-3 3a1 1 0 0 1 -1.414 -1.414l1.292 -1.293h-10.171l-2.207 2.207a1 1 0 0 1 -1.414 0l-2.5 -2.5a1 1 0 0 1 0 -1.414l2.5 -2.5a1 1 0 0 1 1.414 0l2.208 2.207h10.17l-1.292 -1.293a1 1 0 0 1 -.083 -1.32l.083 -.094a1 1 0 0 1 1.414 0" />
  </svg>
  );
};

export default IconArrowRightRhombusFilled;