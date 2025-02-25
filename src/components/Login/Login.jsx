import React, { useEffect, useState } from 'react'
import { AiOutlineLock, AiOutlineMail } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../features/auth/authSlice';

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { isAuthenticated, user } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email && password) dispatch(login({email, password }));
    }

    useEffect(() => {
        if (isAuthenticated) navigate('/', { replace: true })
    }, [isAuthenticated])
    return (
        <div className='login'>
            <div className="container">
                <div className="loginContainer">
                    <div className="loginFormContainer">
                        <img src="images/login_2.png" alt="" />
                        <form onSubmit={handleSubmit}>
                            <h2 className='loginTitle'>Login in <span>Serenity Hotel</span></h2>
                            <div className="loginformItem">
                                <AiOutlineMail />
                                <input
                                    type="text"
                                    name="email"
                                    id="loginFormInput"
                                    placeholder='Email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="loginformItem">
                                <AiOutlineLock />
                                <input
                                    type="password"
                                    name="email"
                                    id="loginFormInput"
                                    placeholder='Password'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <button type='submit' className='btn loginFormBtn'>LOGIIN</button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login
