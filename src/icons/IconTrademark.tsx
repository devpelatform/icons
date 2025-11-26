import React from 'react';

interface IconTrademarkProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconTrademark: React.FC<IconTrademarkProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-trademark ${defaultSize} ${userClassName}`.trim();

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
    <path d="M4.5 9h5m-2.5 0v6" />
    <path d="M13 15v-6l3 4l3 -4v6" />
  </svg>
  );
};

export default IconTrademark;