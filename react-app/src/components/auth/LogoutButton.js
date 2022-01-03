import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/session';
import { useHistory } from 'react-router-dom';
import './auth.css'

const LogoutButton = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const onLogout = async (e) => {
    await dispatch(logout());
    return history.push('/')
  };

  return (
    <div className='logout-button-parent'>
      <button onClick={onLogout} className='logout-button'>Log out</button>
    </div>
  );
};

export default LogoutButton;
