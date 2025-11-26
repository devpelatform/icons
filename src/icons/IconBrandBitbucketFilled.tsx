import React from 'react';

interface IconBrandBitbucketFilledProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconBrandBitbucketFilled: React.FC<IconBrandBitbucketFilledProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-brand-bitbucket-filled ${defaultSize} ${userClassName}`.trim();

  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
   className={finalClassName} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path d="M3.661 3l16.68 .007c.484 -.005 .946 .203 1.262 .57c.316 .368 .454 .856 .364 1.396l-3.338 14.651a1.64 1.64 0 0 1 -1.629 1.376h-10.01c-.906 -.009 -1.678 -.668 -1.82 -1.517l-3.148 -14.576a1.64 1.64 0 0 1 1.639 -1.907m11.339 5h-6a1 1 0 0 0 -.986 1.164l1 6a1 1 0 0 0 .986 .836h4a1 1 0 0 0 .986 -.836l1 -6a1 1 0 0 0 -.986 -1.164" />
  </svg>
  );
};

export default IconBrandBitbucketFilled;