import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {Link, useHistory} from 'react-router-dom';
import { LoginForm } from '../auth/LoginForm'


const SplashPage = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const handleDemo = async() => {
        
    }

    return (
        <div className='splash-container'>
            <div className='splash-login'>
                <LoginForm />
            </div>
        </div>
    )
}
