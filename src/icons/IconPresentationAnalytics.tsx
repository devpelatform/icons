import React from 'react';

interface IconPresentationAnalyticsProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconPresentationAnalytics: React.FC<IconPresentationAnalyticsProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-presentation-analytics ${defaultSize} ${userClassName}`.trim();

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
    <path d="M9 12v-4" />
    <path d="M15 12v-2" />
    <path d="M12 12v-1" />
    <path d="M3 4h18" />
    <path d="M4 4v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-10" />
    <path d="M12 16v4" />
    <path d="M9 20h6" />
  </svg>
  );
};

export default IconPresentationAnalytics;