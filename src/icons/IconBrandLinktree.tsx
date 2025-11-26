import React from 'react';

interface IconBrandLinktreeProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBrandLinktree: React.FC<IconBrandLinktreeProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-brand-linktree ${defaultSize} ${userClassName}`.trim();

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
    <path d="M4 10h16" />
    <path d="M6.5 4.5l11 11" />
    <path d="M6.5 15.5l11 -11" />
    <path d="M12 10v-8" />
    <path d="M12 15v7" />
  </svg>
  );
};

export default IconBrandLinktree;