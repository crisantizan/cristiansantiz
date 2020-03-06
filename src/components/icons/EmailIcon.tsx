import React from 'react';
import { IconProps } from './icons.model';

export const EmailIcon = (props: IconProps) => {
  let defaultClasses = 'fill-current';
  return (
    <svg
      width={props.width || '20px'}
      height={props.height || '20px'}
      className={`${defaultClasses} ${props.className}`}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C12.5523 22 13 22.4477 13 23C13 23.5523 12.5523 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12V14C24 16.2091 22.2091 18 20 18C18.5017 18 17.1958 17.1762 16.5105 15.9568C15.4108 17.2093 13.7978 18 12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C13.5367 6 14.9385 6.57771 16 7.52779V7C16 6.44772 16.4477 6 17 6C17.5523 6 18 6.44772 18 7V14C18 15.1046 18.8954 16 20 16C21.1046 16 22 15.1046 22 14V12C22 6.47715 17.5228 2 12 2ZM16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16C14.2091 16 16 14.2091 16 12Z"
        fill="currentColor"
      />
    </svg>
  );
};