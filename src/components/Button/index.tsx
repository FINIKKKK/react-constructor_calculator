import React from 'react';

import ss from './Button.module.scss';

interface ButtonProps {
  id: number;
  text: string;
}

export const Button: React.FC<ButtonProps> = ({ id, text }) => {
  return <div className="item">{text}</div>;
};
