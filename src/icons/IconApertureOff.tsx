import React from 'react';

interface IconApertureOffProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconApertureOff: React.FC<IconApertureOffProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-aperture-off ${defaultSize} ${userClassName}`.trim();

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
    <path d="M3.6 15h10.55" />
    <path d="M5.641 5.631a9 9 0 1 0 12.719 12.738m1.68 -2.318a9 9 0 0 0 -12.074 -12.098" />
    <path d="M7.395 7.534l2.416 7.438" />
    <path d="M17.032 4.636l-4.852 3.526m-2.334 1.695l-1.349 .98" />
    <path d="M20.559 14.51l-8.535 -6.201" />
    <path d="M12.257 20.916l2.123 -6.533m.984 -3.028l.154 -.473" />
    <path d="M3 3l18 18" />
  </svg>
  );
};

export default IconApertureOff;