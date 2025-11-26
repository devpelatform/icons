import React from 'react';

interface IconBrandEdgeProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBrandEdge: React.FC<IconBrandEdgeProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-brand-edge ${defaultSize} ${userClassName}`.trim();

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
    <path d="M20.978 11.372a9 9 0 1 0 -1.593 5.773" />
    <path d="M20.978 11.372c.21 2.993 -5.034 2.413 -6.913 1.486c1.392 -1.6 .402 -4.038 -2.274 -3.851c-1.745 .122 -2.927 1.157 -2.784 3.202c.28 3.99 4.444 6.205 10.36 4.79" />
    <path d="M3.022 12.628c-.283 -4.043 8.717 -7.228 11.248 -2.688" />
    <path d="M12.628 20.978c-2.993 .21 -5.162 -4.725 -3.567 -9.748" />
  </svg>
  );
};

export default IconBrandEdge;