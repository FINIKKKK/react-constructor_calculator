import React from 'react';
import { Constructor, Field, Tabs } from './components';

function App() {
  return (
    <div className="main">
      <div className="calculator">
        <Constructor />
        <div className="leftSide">
          <Tabs />
          <Field />
        </div>
      </div>
    </div>
  );
}

export default App;
