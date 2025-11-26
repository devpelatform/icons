import React from 'react';

interface IconBallAmericanFootballOffProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBallAmericanFootballOff: React.FC<IconBallAmericanFootballOffProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-ball-american-football-off ${defaultSize} ${userClassName}`.trim();

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
    <path d="M15 9l-1 1m-2 2l-3 3" />
    <path d="M10 12l2 2" />
    <path d="M8 21a5 5 0 0 0 -5 -5" />
    <path d="M6.813 6.802a12.96 12.96 0 0 0 -3.813 9.198a5 5 0 0 0 5 5a12.96 12.96 0 0 0 9.186 -3.801m1.789 -2.227a12.94 12.94 0 0 0 2.025 -6.972a5 5 0 0 0 -5 -5a12.94 12.94 0 0 0 -6.967 2.022" />
    <path d="M16 3a5 5 0 0 0 5 5" />
    <path d="M3 3l18 18" />
  </svg>
  );
};

export default IconBallAmericanFootballOff;