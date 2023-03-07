import classNames from 'classnames';
import React from 'react';
import { Button } from '../../components';

import ss from './Card.module.scss';

export type TButton = {
  id: number;
  text: string;
};

interface CardProps {
  buttons?: TButton[];
  textButton?: string;
}

export const Card: React.FC<CardProps> = ({ buttons, textButton }) => {
  return (
    <div className="block">
      {buttons ? (
        <div
          className={classNames('list', {
            list2: buttons.length > 4,
          })}
        >
          {buttons.map((obj) => (
            <Button
              key={obj.id}
              {...obj}
            />
          ))}
        </div>
      ) : (
        <div
          className={classNames('label', {
            display: textButton === '0',
            btn: textButton === '=',
          })}
        >
          {textButton}
        </div>
      )}
    </div>
  );
};
