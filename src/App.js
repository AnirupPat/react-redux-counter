import React from 'react';
import Counter from './components/Counter';
import CounterClassBased from './components/Counter-class-based';


function App() {
  return (
    <React.Fragment>
    <Counter />
    <CounterClassBased />
    </React.Fragment>
    
  );
}

export default App;
