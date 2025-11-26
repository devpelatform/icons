import React from 'react';

interface IconPrescriptionProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconPrescription: React.FC<IconPrescriptionProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-prescription ${defaultSize} ${userClassName}`.trim();

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
    <path d="M6 19v-16h4.5a4.5 4.5 0 1 1 0 9h-4.5" />
    <path d="M19 21l-9 -9" />
    <path d="M13 21l6 -6" />
  </svg>
  );
};

export default IconPrescription;