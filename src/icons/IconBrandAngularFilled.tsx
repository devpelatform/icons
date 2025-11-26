import React from 'react';

interface IconBrandAngularFilledProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBrandAngularFilled: React.FC<IconBrandAngularFilledProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-brand-angular-filled ${defaultSize} ${userClassName}`.trim();

  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
   className={finalClassName} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path d="M12.665 2.174l7.4 2.612a2 2 0 0 1 1.316 2.156l-1.323 9.703a2 2 0 0 1 -.99 1.468l-6.076 3.471a2 2 0 0 1 -1.984 0l-6.076 -3.47a2 2 0 0 1 -.96 -1.3l-.03 -.167l-1.322 -9.704a2 2 0 0 1 1.316 -2.156l7.4 -2.613a2 2 0 0 1 1.33 0m.271 4.475c-.324 -.865 -1.548 -.865 -1.872 0l-3 8a1 1 0 0 0 .585 1.287l.111 .035a1 1 0 0 0 1.176 -.62l.506 -1.351h3.113l.508 1.352a1 1 0 0 0 1.176 .62l.111 -.035a1 1 0 0 0 .585 -1.287zm-.937 3.199l.807 2.151h-1.614z" />
  </svg>
  );
};

export default IconBrandAngularFilled;