import React from 'react';

interface IconTextGrammarProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconTextGrammar: React.FC<IconTextGrammarProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-text-grammar ${defaultSize} ${userClassName}`.trim();

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
    <path d="M14 9a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
    <path d="M4 12v-5a3 3 0 1 1 6 0v5" />
    <path d="M4 9h6" />
    <path d="M20 6v6" />
    <path d="M4 16h12" />
    <path d="M4 20h6" />
    <path d="M14 20l2 2l5 -5" />
  </svg>
  );
};

export default IconTextGrammar;