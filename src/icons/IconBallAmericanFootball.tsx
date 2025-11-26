import React from 'react';

interface IconBallAmericanFootballProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBallAmericanFootball: React.FC<IconBallAmericanFootballProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-ball-american-football ${defaultSize} ${userClassName}`.trim();

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
    <path d="M15 9l-6 6" />
    <path d="M10 12l2 2" />
    <path d="M12 10l2 2" />
    <path d="M8 21a5 5 0 0 0 -5 -5" />
    <path d="M16 3c-7.18 0 -13 5.82 -13 13a5 5 0 0 0 5 5c7.18 0 13 -5.82 13 -13a5 5 0 0 0 -5 -5" />
    <path d="M16 3a5 5 0 0 0 5 5" />
  </svg>
  );
};

export default IconBallAmericanFootball;