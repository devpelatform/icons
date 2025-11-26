import React from 'react';

interface IconPodiumOffProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconPodiumOff: React.FC<IconPodiumOffProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-podium-off ${defaultSize} ${userClassName}`.trim();

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
    <path d="M12 8h7l-.621 2.485a2 2 0 0 1 -1.94 1.515h-.439m-4 0h-4.439a2 2 0 0 1 -1.94 -1.515l-.621 -2.485h3" />
    <path d="M7 8v-1m.864 -3.106a2.99 2.99 0 0 1 2.136 -.894" />
    <path d="M8 12l1 9" />
    <path d="M15.599 15.613l-.599 5.387" />
    <path d="M7 21h10" />
    <path d="M3 3l18 18" />
  </svg>
  );
};

export default IconPodiumOff;