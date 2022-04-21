import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useHistory } from 'react-router-dom';
import {useSelector} from 'react-redux';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const history = useHistory();

  const handleStart = () => {
    history.push('/quickStepHome')
  }
  return (
    <div className="profileContainer">
      <h2>Welcome, {user.username}!</h2>
      
      <LogOutButton className="stepButton" />
      <button className="stepButton" onClick={handleStart}>Start</button>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
