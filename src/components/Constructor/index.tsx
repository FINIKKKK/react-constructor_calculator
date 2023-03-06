import React from 'react';
import { Button } from '../Button';
import { ListButton } from '../ListButton';

import ss from './Constructor.module.scss';

interface ConstructorProps {}

const list1 = ['/', 'x', '+', '-'];
const list2 = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', ','];

export const Constructor: React.FC<ConstructorProps> = ({}) => {
  return (
    <div className="constructor">
      <div className="block">
        <div className="input">0</div>
      </div>

      <div className="block">
        <ul className="list1">
          {list1.map((text: string, index) => (
            <Button
              key={index}
              id={index}
              text={text}
            />
          ))}
        </ul>
      </div>

      <div className="block">
        <ul className="list2">
          {list2.map((text: string, index: number) => (
            <Button
              key={index}
              id={index}
              text={text}
            />
          ))}
        </ul>
      </div>

      <div className="block">
        <div className="btn">=</div>
      </div>
    </div>
  );
};
