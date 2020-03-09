import React from 'react';
import { IconProps } from './icons.model';

export const CompetitivenessIcon = (props: IconProps) => {
  let defaultClasses = 'fill-current';
  return (
    <svg
      id="Layer_5"
      enable-background="new 0 0 64 64"
      width={props.width || '20px'}
      height={props.height || '20px'}
      className={`${defaultClasses} ${props.className}`}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg">
      <path fill="currentColor" d="m59.5 35c-1.93 0-3.5 1.57-3.5 3.5v7.031c0 1.483-1.107 2.76-2.576 2.97l-.628.09c.752-1.003 1.204-2.244 1.204-3.591 0-3.309-2.691-6-6-6s-6 2.691-6 6c0 1.347.452 2.588 1.204 3.591l-.628-.09c-1.469-.21-2.576-1.487-2.576-2.97v-7.031c0-1.93-1.57-3.5-3.5-3.5s-3.5 1.57-3.5 3.5v7.894c0 4.306 3.069 8.023 7.298 8.838l.702.135v7.633h14v-7.633l.702-.135c4.229-.815 7.298-4.532 7.298-8.838v-7.894c0-1.93-1.57-3.5-3.5-3.5zm-11.5 6c2.206 0 4 1.794 4 4s-1.794 4-4 4-4-1.794-4-4 1.794-4 4-4zm13 5.394c0 3.349-2.388 6.24-5.677 6.874l-2.323.447v7.285h-10v-7.285l-2.323-.448c-3.289-.633-5.677-3.524-5.677-6.873v-7.894c0-.827.673-1.5 1.5-1.5s1.5.673 1.5 1.5v7.031c0 2.472 1.846 4.6 4.293 4.95l3.565.509 2.039.005c.035 0 .068.005.103.005h1v-.003l1 .003 3.707-.52c2.447-.35 4.293-2.478 4.293-4.95v-7.03c0-.827.673-1.5 1.5-1.5s1.5.673 1.5 1.5z" />
      <path fill="currentColor" d="m55 21v-20h-2.176l-13.863 5.041 14.039 4.68v10.279h-12.322l-10.766 7.752c-.181-.99-.649-1.903-1.376-2.63l-2.536-2.536v-5.768c3.719-.884 6.833-3.428 8.434-6.938l2.254-4.945c.207-.456.312-.94.312-1.455 0-1.918-1.562-3.48-3.53-3.48-1.29 0-2.449.717-3.025 1.87l-2.129 4.26c-.734 1.468-1.926 2.59-3.355 3.24.655-.961 1.039-2.121 1.039-3.37 0-3.309-2.691-6-6-6s-6 2.691-6 6c0 1.556.6 2.971 1.575 4.038-3.276.193-6.237 2.16-7.635 5.156l-4.617 9.894c-.212.452-.323.954-.323 1.464 0 1.901 1.547 3.448 3.498 3.448 1.303 0 2.497-.764 3.042-1.947l4.46-9.666v19.963c-2.327.826-4 3.043-4 5.65 0 1.347.452 2.588 1.204 3.591l-.628-.09c-1.469-.21-2.576-1.487-2.576-2.97v-7.031c0-1.93-1.57-3.5-3.5-3.5s-3.5 1.57-3.5 3.5v7.894c0 4.306 3.069 8.023 7.298 8.838l.702.135v7.633h14v-7.633l.702-.135c4.229-.815 7.298-4.532 7.298-8.838v-7.894c0-1.93-1.57-3.5-3.5-3.5s-3.5 1.57-3.5 3.5v7.031c0 1.483-1.107 2.76-2.576 2.97l-.628.09c.752-1.003 1.204-2.244 1.204-3.591 0-2.455-1.484-4.568-3.6-5.496l22.922-16.504h21.678v-2zm-9.961-15.041 7.961-2.895v5.549zm-25.039-2.959c2.206 0 4 1.794 4 4s-1.794 4-4 4-4-1.794-4-4 1.794-4 4-4zm-6.64 13-5.636 12.216c-.22.476-.702.784-1.276.784-.799 0-1.448-.649-1.448-1.459 0-.209.047-.419.135-.608l4.617-9.893c1.146-2.454 3.635-4.04 6.343-4.04h5.961c3.431 0 6.515-1.907 8.049-4.976l2.129-4.26c.235-.471.708-.764 1.286-.764.816 0 1.48.664 1.48 1.495 0 .212-.045.417-.133.611l-2.254 4.945c-1.442 3.163-4.35 5.392-7.777 5.963l-.836.139-.001 8.261 3.122 3.122c.559.558.879 1.331.879 2.121v.471l-3 2.16v-2.702l-3.586-3.586h-2.414v10.608l-3 2.16v-22.768zm9.64 17.728-2 1.44v-6.754l2 2zm-1.293 16.752c2.447-.35 4.293-2.478 4.293-4.95v-7.03c0-.827.673-1.5 1.5-1.5s1.5.673 1.5 1.5v7.894c0 3.349-2.388 6.24-5.677 6.874l-2.323.447v7.285h-10v-7.285l-2.323-.448c-3.289-.633-5.677-3.524-5.677-6.873v-7.894c0-.827.673-1.5 1.5-1.5s1.5.673 1.5 1.5v7.031c0 2.472 1.846 4.6 4.293 4.95l3.565.509 2.039.005c.035 0 .068.005.103.005h1v-.003l1 .003zm-1.707-5.48c0 2.206-1.794 4-4 4s-4-1.794-4-4 1.794-4 4-4 4 1.794 4 4z" />
      <path fill="currentColor" d="m43 25h2v2h-2z" />
      <path fill="currentColor" d="m47 25h2v2h-2z" />
      <path fill="currentColor" d="m51 25h2v2h-2z" />
    </svg>
  );
};
