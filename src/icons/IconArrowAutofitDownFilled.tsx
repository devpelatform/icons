import React from 'react';

interface IconArrowAutofitDownFilledProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconArrowAutofitDownFilled: React.FC<IconArrowAutofitDownFilledProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-arrow-autofit-down-filled ${defaultSize} ${userClassName}`.trim();

  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
   className={finalClassName} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path d="M14 3a1 1 0 0 1 1 1v11.001h-.092a3 3 0 0 0 -2.03 5.12a.515 .515 0 0 1 -.363 .879h-6.515a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3z" />
    <path d="M18 3a1 1 0 0 1 1 1v14.584l1.293 -1.291a1 1 0 0 1 1.32 -.083l.094 .083a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1 -.112 .097l-.11 .071l-.114 .054l-.105 .035l-.149 .03l-.117 .006l-.075 -.003l-.126 -.017l-.111 -.03l-.111 -.044l-.098 -.052l-.096 -.067l-.09 -.08l-3 -3a1 1 0 0 1 1.414 -1.414l1.293 1.293v-14.586a1 1 0 0 1 1 -1" />
  </svg>
  );
};

export default IconArrowAutofitDownFilled;