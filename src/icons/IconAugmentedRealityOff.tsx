import React from 'react';

interface IconAugmentedRealityOffProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconAugmentedRealityOff: React.FC<IconAugmentedRealityOffProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-augmented-reality-off ${defaultSize} ${userClassName}`.trim();

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
    <path d="M4 8v-2c0 -.557 .228 -1.061 .595 -1.424" />
    <path d="M4 16v2a2 2 0 0 0 2 2h2" />
    <path d="M16 4h2a2 2 0 0 1 2 2v2" />
    <path d="M16 20h2c.558 0 1.062 -.228 1.425 -.596" />
    <path d="M12 12.5l.312 -.195m2.457 -1.536l1.231 -.769" />
    <path d="M9.225 9.235l-1.225 .765l4 2.5v4.5l3.076 -1.923m.924 -3.077v-2l-4 -2.5l-.302 .189" />
    <path d="M8 10v4.5l4 2.5" />
    <path d="M3 3l18 18" />
  </svg>
  );
};

export default IconAugmentedRealityOff;