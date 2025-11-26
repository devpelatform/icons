import React from 'react';

interface IconBoxModelOffProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBoxModelOff: React.FC<IconBoxModelOffProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-box-model-off ${defaultSize} ${userClassName}`.trim();

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
    <path d="M12 8h4v4m0 4h-8v-8" />
    <path d="M8 4h10a2 2 0 0 1 2 2v10m-.586 3.414a2 2 0 0 1 -1.414 .586h-12a2 2 0 0 1 -2 -2v-12c0 -.547 .22 -1.043 .576 -1.405" />
    <path d="M16 16l3.3 3.3" />
    <path d="M16 8l3.3 -3.3" />
    <path d="M8 8l-3.3 -3.3" />
    <path d="M8 16l-3.3 3.3" />
    <path d="M3 3l18 18" />
  </svg>
  );
};

export default IconBoxModelOff;