import classNames from 'classnames';
import React from 'react';

import ss from './Tabs.module.scss';

interface TabsProps {}

export const Tabs: React.FC<TabsProps> = ({}) => {
  const [checkBox, setCheckBox] = React.useState(1);

  return (
    <ul className="tabs">
      <li
        className={classNames('tab', {
          active: checkBox === 0,
        })}
        onClick={() => setCheckBox(0)}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.7678 11.7678C12.2366 11.2989 12.5 10.663 12.5 10C12.5 9.33696 12.2366 8.70107 11.7678 8.23223C11.2989 7.76339 10.663 7.5 10 7.5C9.33696 7.5 8.70107 7.76339 8.23223 8.23223C7.76339 8.70107 7.5 9.33696 7.5 10C7.5 10.663 7.76339 11.2989 8.23223 11.7678C8.70107 12.2366 9.33696 12.5 10 12.5C10.663 12.5 11.2989 12.2366 11.7678 11.7678Z"
            stroke="#4D5562"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M2.04834 10C3.11001 6.61919 6.26917 4.16669 10 4.16669C13.7317 4.16669 16.89 6.61919 17.9517 10C16.89 13.3809 13.7317 15.8334 10 15.8334C6.26917 15.8334 3.11001 13.3809 2.04834 10Z"
            stroke="#4D5562"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <p>Runtime</p>
      </li>
      <li
        className={classNames('tab', {
          active: checkBox === 1,
        })}
        onClick={() => setCheckBox(1)}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.50008 13.3333L4.16675 9.99998L7.50008 6.66665M12.5001 6.66665L15.8334 9.99998L12.5001 13.3333"
            stroke="#5D5FEF"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <p>Constructor</p>
      </li>
    </ul>
  );
};
