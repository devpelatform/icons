import React from 'react';

interface IconBrandWikipediaProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBrandWikipedia: React.FC<IconBrandWikipediaProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-brand-wikipedia ${defaultSize} ${userClassName}`.trim();

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
    <path d="M3 4.984h2" />
    <path d="M8 4.984h2.5" />
    <path d="M14.5 4.984h2.5" />
    <path d="M22 4.984h-2" />
    <path d="M4 4.984l5.455 14.516l6.545 -14.516" />
    <path d="M9 4.984l6 14.516l6 -14.516" />
  </svg>
  );
};

export default IconBrandWikipedia;