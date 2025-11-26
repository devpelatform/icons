import React from 'react';

interface IconCashBanknoteMoveProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconCashBanknoteMove: React.FC<IconCashBanknoteMoveProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-cash-banknote-move ${defaultSize} ${userClassName}`.trim();

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
    <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
    <path d="M12 18h-7a2 2 0 0 1 -2 -2v-8a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4.5" />
    <path d="M18 12h.01" />
    <path d="M6 12h.01" />
    <path d="M16 19h6" />
    <path d="M19 16l3 3l-3 3" />
  </svg>
  );
};

export default IconCashBanknoteMove;