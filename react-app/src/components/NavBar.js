import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import CreateLocationFormModal from './CreateLocationModal';
import SearchArea from './Search';
import './rest.css'

const NavBar = () => {

  return (
    <nav >
      <div>
        <NavLink to='/' exact={true} className={'nav-home-redirect'}>
          <div className='nav-logo'>GetAway</div>
        </NavLink>
      </div>
      <SearchArea />
      <div className='nav-right'>
        <NavLink to='/bookings' exact={true} className={'bookings-redirect'}>
          Bookings
        </NavLink>
        <CreateLocationFormModal />
        <LogoutButton />
      </div>
    </nav>
  );
}

export default NavBar;
