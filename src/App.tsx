import React from 'react';
import { Constructor } from './components/Constructor';
import { Field } from './components/Field/Field';

function App() {
  return (
    <div className="main">
      <div className="calculator">
        <Constructor />
        <Field />
      </div>
    </div>
  );
}

export default App;
