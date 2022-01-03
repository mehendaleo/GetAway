import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {NavLink, useHistory} from 'react-router-dom';
import  LoginForm  from '../auth/LoginForm'
import { login } from '../../store/session'
import './splash.css';


const SplashPage = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector(state => state.session.user)

    const handleDemo = async() => {
        const email = 'demo@demolition.io';
        const password = 'password';
        await dispatch(login(email, password));
        return history.push('/');
    }

    return (
        <div className='splash-container'>
            <div>
                <div className='splash-login-container'>
                    <div className='splash-getaway'>
                        Welcome to GetAway
                    </div>
                    <LoginForm />
                    <div>
                        <button onClick={handleDemo} className='demo-button'>Demo Login</button>
                    </div>
                    <p className='splash-message'>
                        Get Away from life and find an adventure!
                    </p>
                </div>
                <div className='splash-signup'>
                    <div>
                        <span>
                            <NavLink to='/signup' className={'splash-signup-redirect'}>Continue with email</NavLink>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default SplashPage;
