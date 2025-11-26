import React from 'react';

interface IconCircuitCapacitorProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconCircuitCapacitor: React.FC<IconCircuitCapacitorProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-circuit-capacitor ${defaultSize} ${userClassName}`.trim();

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
    <path d="M22 12h-8" />
    <path d="M2 12h8" />
    <path d="M10 7v10" />
    <path d="M14 7v10" />
  </svg>
  );
};

export default IconCircuitCapacitor;