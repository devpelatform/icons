import React from 'react';

interface IconZodiacGeminiProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconZodiacGemini: React.FC<IconZodiacGeminiProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-zodiac-gemini ${defaultSize} ${userClassName}`.trim();

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
    <path d="M3 3a21 21 0 0 0 18 0" />
    <path d="M3 21a21 21 0 0 1 18 0" />
    <path d="M7 4.5l0 15" />
    <path d="M17 4.5l0 15" />
  </svg>
  );
};

export default IconZodiacGemini;