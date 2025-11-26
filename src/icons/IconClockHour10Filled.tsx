import React from 'react';

interface IconClockHour10FilledProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconClockHour10Filled: React.FC<IconClockHour10FilledProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-clock-hour-10-filled ${defaultSize} ${userClassName}`.trim();

  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
   className={finalClassName} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path d="M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336m-5.401 9.576l.052 .021l.08 .026l.08 .019l.072 .011l.117 .007l.076 -.003l.135 -.02l.082 -.02l.103 -.039l.073 -.035l.078 -.046l.06 -.042l.08 -.069l.083 -.088l.062 -.083l.053 -.09l.031 -.064l.032 -.081l.03 -.109l.015 -.094l.007 -.117v-5a1 1 0 0 0 -2 0v3.131l-1.445 -.963a1 1 0 0 0 -1.317 .184l-.07 .093a1 1 0 0 0 .277 1.387l3.038 2.024z" />
  </svg>
  );
};

export default IconClockHour10Filled;