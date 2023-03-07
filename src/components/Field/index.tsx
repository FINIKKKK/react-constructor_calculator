import React from 'react';

import ss from './Field.module.scss';

interface FieldProps {}

export const Field: React.FC<FieldProps> = ({}) => {
  return (
    <div className="field">
      <div className="content">
        <img
          src={process.env.PUBLIC_URL + '/assets/img/image.svg'}
          alt="attach"
        />
        <h4>Перетащите сюда</h4>
        <p>любой элемент из левой панели</p>
      </div>
    </div>
  );
};
