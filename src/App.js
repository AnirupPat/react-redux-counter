import { useSelector, useDispatch } from 'react-redux';
import { authActions } from './store/index';
import React from 'react';
import Counter from './components/Counter';
import CounterClassBased from './components/Counter-class-based';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';

function App() {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth.isAuthenticated);
  return (
    <React.Fragment>
    <Header />
    {!auth && <Auth />}
    {auth && <UserProfile />}
    <Counter />
    </React.Fragment>
    
  );
}

export default App;
