import React from 'react';
import Counter from './components/Counter';
import CounterClassBased from './components/Counter-class-based';
import Header from './components/Header';
import Auth from './components/Auth'
;

function App() {
  return (
    <React.Fragment>
    <Header />
    <Auth />
    <Counter />
    </React.Fragment>
    
  );
}

export default App;
