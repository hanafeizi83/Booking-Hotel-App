import React from 'react'
import { AiOutlineLock, AiOutlineMail } from "react-icons/ai";

function Login() {
    return (
        <div className='login'>
            <div className="container">
                <div className="loginContainer">
                    <div className="loginFormContainer">
                        <img src="images/login_2.png" alt="" />
                        <form>
                            <h2 className='loginTitle'>Login in <span>Serenity Hotel</span></h2>
                            <div className="loginformItem">
                                <AiOutlineMail />
                                <input type="text" name="email" id="loginFormInput" placeholder='Email'/>
                            </div>
                            <div className="loginformItem">
                                <AiOutlineLock />
                                <input type="password" name="email" id="loginFormInput" placeholder='Password'/>
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
