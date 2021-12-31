import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import Explore from './components/ExplorePage/Explore';
import SingleLocation from './components/SingleLocationPage/SingleLocation';
import SplashPage from './components/SplashPage/SplashPage';
import HomePage from './components/HomePage/HomePage';
import Charlotte from './components/Locations/Charlotte/Charlotte';
import Charleston from './components/Locations/Charleston/Charleston';
import Tampa from './components/Locations/Tampa/Tampa';
import Miami from './components/Locations/Miami/Miami';
import { authenticate } from './store/session';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  //use this to only display login/signup if no session user, otherwise render everything else
  const sessionUser = useSelector(state => state.session.user)

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  if (sessionUser?.id) {
    return (
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path='/charlotte' esact={true}>
            <Charlotte />
          </Route>
          <Route path='/charleston' esact={true}>
            <Charleston />
          </Route>
          <Route path='/tampa' esact={true}>
            <Tampa />
          </Route>
          <Route path='/miami' esact={true}>
            <Miami />
          </Route>
          <Route path='/locations/:location_id'>
            <SingleLocation />
          </Route>
          <ProtectedRoute path='/users' exact={true} >
            <UsersList/>
          </ProtectedRoute>
          <ProtectedRoute path='/users/:userId' exact={true} >
            <User />
          </ProtectedRoute>
          <Route path='/explore' exact={true}>
            <Explore />
          </Route>
          <ProtectedRoute path='/' exact={true} >
            <HomePage />
          </ProtectedRoute>
        </Switch>
      </BrowserRouter>
    );
  } else {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/signup' exact={true}>
            <SignUpForm />
          </Route>
          <Route path='/' exact={true}>
            <SplashPage />
          </Route>
        </Switch>
      </BrowserRouter>
    )

  }


}

export default App;
