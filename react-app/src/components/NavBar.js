import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import CreateLocationFormModal from './CreateLocationModal';
import SearchArea from './Search';
import { useSelector } from 'react-redux';

const NavBar = () => {
  const sessionUser = useSelector(state => state.session.user)

  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/' exact={true} activeClassName='active'>
            GetAway
          </NavLink>
        </li>
        <li>
            <SearchArea />
        </li>
        <li>
          <CreateLocationFormModal />
        </li>
        <li>
          <LogoutButton />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
