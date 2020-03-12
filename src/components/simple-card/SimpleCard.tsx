import React from 'react';
import './simple-card.scss';

interface Props {
  icon: JSX.Element;
  title: string;
  children: string;
}

export const SimpleCard: React.FC<Props> = ({ icon, title, children }) => {
  return (
    <div className="w-full simple-card-container">
      <div className="simple-card-header rounded-t h-40  text-center overflow-hidden flex justify-center items-center px-1">
        {icon}
      </div>
      <div className="simple-card-content border-r border-b border-l border-gray-500 rounded-b p-4 flex flex-col justify-between leading-normal">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-base text-justify">{children}</p>
      </div>
    </div>
  );
};