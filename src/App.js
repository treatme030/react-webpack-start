import React from 'react';
import simson from './images/default.jpeg';

const App = () => {
  return (
    <div>
      <h1>Hello Simson!</h1>
      <img src={simson} alt="simson" />
    </div>
  );
};

export default App;