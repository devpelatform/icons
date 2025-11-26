import React from 'react';

interface IconClockHour8FilledProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconClockHour8Filled: React.FC<IconClockHour8FilledProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-clock-hour-8-filled ${defaultSize} ${userClassName}`.trim();

  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
   className={finalClassName} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path d="M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336m-5 2.66a1 1 0 0 0 -1 1v4.464l-2.555 1.704a1 1 0 0 0 -.336 1.286l.059 .1a1 1 0 0 0 1.387 .278l3.027 -2.018l.087 -.07l.074 -.075l.075 -.094l.052 -.08l.035 -.07l.051 -.132l.031 -.135l.01 -.082l.003 -.076v-5a1 1 0 0 0 -1 -1" />
  </svg>
  );
};

export default IconClockHour8Filled;