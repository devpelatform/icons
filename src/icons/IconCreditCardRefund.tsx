import React from 'react';

interface IconCreditCardRefundProps {
  className?: string;
  'data-slot'?: string;
  [key: string]: any;
}

const IconCreditCardRefund: React.FC<IconCreditCardRefundProps> = (props) => {
  // Handle size classes - if user provides size-* class, use it, otherwise default to size-4
  const userClassName = props.className || '';
  const hasSizeClass = /\bsize-\w+\b/.test(userClassName);
  const defaultSize = hasSizeClass ? '' : 'size-4';
  const finalClassName = `pelatform-icons pelatform-icon-credit-card-refund ${defaultSize} ${userClassName}`.trim();

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
    <path d="M12 19h-6a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v4.5" />
    <path d="M3 10h18" />
    <path d="M7 15h.01" />
    <path d="M11 15h2" />
    <path d="M16 19h6" />
    <path d="M19 16l-3 3l3 3" />
  </svg>
  );
};

export default IconCreditCardRefund;