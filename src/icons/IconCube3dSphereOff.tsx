import React from 'react';

interface IconCube3dSphereOffProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconCube3dSphereOff: React.FC<IconCube3dSphereOffProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-cube-3d-sphere-off ${defaultSize} ${userClassName}`.trim();

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
    <path d="M6 17.6l-2 -1.1v-2.5" />
    <path d="M4 10v-2.5l2 -1.1" />
    <path d="M10 4.1l2 -1.1l2 1.1" />
    <path d="M18 6.4l2 1.1v2.5" />
    <path d="M20 14v2" />
    <path d="M14 19.9l-2 1.1l-2 -1.1" />
    <path d="M18 8.6l2 -1.1" />
    <path d="M12 12v2.5" />
    <path d="M12 18.5v2.5" />
    <path d="M12 12l-2 -1.12" />
    <path d="M6 8.6l-2 -1.1" />
    <path d="M3 3l18 18" />
  </svg>
  );
};

export default IconCube3dSphereOff;