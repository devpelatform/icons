import React from 'react';

interface IconPasswordMobilePhoneProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconPasswordMobilePhone: React.FC<IconPasswordMobilePhoneProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-password-mobile-phone ${defaultSize} ${userClassName}`.trim();

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
    <path d="M12 17v4" />
    <path d="M10 20l4 -2" />
    <path d="M10 18l4 2" />
    <path d="M5 17v4" />
    <path d="M3 20l4 -2" />
    <path d="M3 18l4 2" />
    <path d="M19 17v4" />
    <path d="M17 20l4 -2" />
    <path d="M17 18l4 2" />
    <path d="M7 14v-8a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v8" />
    <path d="M11 5h2" />
    <path d="M12 17v.01" />
  </svg>
  );
};

export default IconPasswordMobilePhone;