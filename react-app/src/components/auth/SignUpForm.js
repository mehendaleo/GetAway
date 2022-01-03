import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import './auth.css'

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  // const [username, setUsername] = useState('');
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [propic_url, setPropic] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(first_name, last_name, email, propic_url, password));
      if (data) {
        setErrors(data)
      }
    }
  };

  const updateFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const updateLastName = (e) => {
    setLastName(e.target.value);
  }

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePropic = (e) => {
    setPropic(e.target.value);
  }

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className='signup-megaparent'>
      <div className='signup-parent'>
        <div className='signup-container'>
          <form onSubmit={onSignUp}>
            <div>
              {errors.map((error, ind) => (
                <div key={ind}>{error}</div>
              ))}
            </div>
            <div>
              <input
                type='text'
                name='first_name'
                onChange={updateFirstName}
                value={first_name}
                placeholder='First Name'
                className='login-form-input'
              ></input>
            </div>
            <div>
              <input
                type='text'
                name='last_name'
                onChange={updateLastName}
                value={last_name}
                placeholder='Last Name'
                className='login-form-input'
              ></input>
            </div>
            <div>
              <input
                type='text'
                name='email'
                onChange={updateEmail}
                value={email}
                placeholder='Email'
                className='login-form-input'
              ></input>
            </div>
            <div>
              <input
                type='text'
                name='profile'
                onChange={updatePropic}
                value={propic_url}
                placeholder='Profile Image URL'
                className='login-form-input'
              ></input>
            </div>
            <div>
              <input
                type='password'
                name='password'
                onChange={updatePassword}
                value={password}
                placeholder='Password'
                className='login-form-input'
              ></input>
            </div>
            <div>
              <input
                type='password'
                name='repeat_password'
                onChange={updateRepeatPassword}
                value={repeatPassword}
                required={true}
                placeholder='Confirm Password'
                className='login-form-input'
              ></input>
            </div>
            <button type='submit' className='demo-button'>Sign Up</button>
          </form>
        </div>
        <div className='splash-signup'>
          <a href={'/'}>Log in</a>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
