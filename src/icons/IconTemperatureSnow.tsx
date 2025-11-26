import React from 'react';

interface IconTemperatureSnowProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconTemperatureSnow: React.FC<IconTemperatureSnowProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-temperature-snow ${defaultSize} ${userClassName}`.trim();

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
    <path d="M4 13.5a4 4 0 1 0 4 0v-8.5a2 2 0 1 0 -4 0v8.5" />
    <path d="M4 9h4" />
    <path d="M14.75 4l1 2h2.25" />
    <path d="M17 4l-3 5l2 3" />
    <path d="M20.25 10l-1.25 2l1.25 2" />
    <path d="M22 12h-6l-2 3" />
    <path d="M18 18h-2.25l-1 2" />
    <path d="M17 20l-3 -5h-1" />
    <path d="M12 9l2.088 .008" />
  </svg>
  );
};

export default IconTemperatureSnow;