import React from 'react';

interface IconDeviceGamepadFilledProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconDeviceGamepadFilled: React.FC<IconDeviceGamepadFilledProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-device-gamepad-filled ${defaultSize} ${userClassName}`.trim();

  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
   className={finalClassName} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path d="M20 5a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-16a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3zm-12 4l-.117 .007a1 1 0 0 0 -.883 .993v1h-1a1 1 0 0 0 -1 1l.007 .117a1 1 0 0 0 .993 .883h1v1a1 1 0 0 0 1 1l.117 -.007a1 1 0 0 0 .883 -.993v-1h1a1 1 0 0 0 1 -1l-.007 -.117a1 1 0 0 0 -.993 -.883h-1v-1a1 1 0 0 0 -1 -1m10 3a1 1 0 0 0 -1 1v.01a1 1 0 0 0 2 0v-.01a1 1 0 0 0 -1 -1m-3 -2a1 1 0 0 0 -1 1v.01a1 1 0 0 0 2 0v-.01a1 1 0 0 0 -1 -1" />
  </svg>
  );
};

export default IconDeviceGamepadFilled;