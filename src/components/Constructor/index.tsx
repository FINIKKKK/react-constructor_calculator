import React from 'react';
import { Card } from '../../components';

import ss from './Constructor.module.scss';

interface ConstructorProps {}

const buttons1 = [
  { id: 1, text: '/' },
  { id: 1, text: 'x' },
  { id: 1, text: '+' },
  { id: 1, text: '-' },
];

const buttons2 = [
  { id: 5, text: '7' },
  { id: 6, text: '8' },
  { id: 7, text: '9' },
  { id: 8, text: '4' },
  { id: 9, text: '5' },
  { id: 10, text: '6' },
  { id: 11, text: '1' },
  { id: 12, text: '2' },
  { id: 13, text: '3' },
  { id: 14, text: '0' },
  { id: 15, text: ',' },
];

export const Constructor: React.FC<ConstructorProps> = ({}) => {
  return (
    <div className="constructor">
      <Card textButton="0" />
      <Card buttons={buttons1} />
      <Card buttons={buttons2} />
      <Card textButton="=" />
    </div>
  );
};
