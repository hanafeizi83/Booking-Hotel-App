import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineMenu } from "react-icons/ai";
import useOutsideClick from '../../hook/useOutsideClick';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../features/auth/authSlice';

function Header() {
    const [small, setSmall] = useState(false);
    const { isAuthenticated, user } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const responseRef = useRef();
    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", () =>
                setSmall(window.pageYOffset > 120)
            );
        }
    }, []);
    useOutsideClick(responseRef, 'menuResponsive', () => setIsOpen(false))
    const handleLogOut = () => {
        dispatch(logout())
        navigate('/')
    }
    return (
        <header className={`header ${small ? 'headerBackground' : ''}`} >
            <div className="container">
                <div className="headerKeeper">
                    <div className="logo">
                        <img src="images/logo.png" alt="Hotel Logo" />
                        <h2>Serenity Hotel</h2>
                    </div>
                    <div className="menuResponsive" id='menuResponsive' ref={responseRef} style={{
                        display: isOpen && 'flex'
                    }}>
                        <nav className='menu' style={{
                            marginTop: isAuthenticated && isOpen && '12rem'
                        }}>
                            <ul>
                                <Link to='/'><li>Home</li></Link>
                                <Link to='/hotels'><li>Hotels</li></Link>
                                <Link to='/bookmarks'><li>Bookmarks</li></Link>
                            </ul>
                        </nav>
                        <div className="btnAndProfile">
                            <div className='headerBtns'>
                                <button
                                    className='btn btnSingIn'
                                    style={{
                                        display: isAuthenticated ? 'none' : ''
                                    }}
                                    onClick={() => navigate('/login')}
                                >Login</button>
                                <button
                                    className='btn btnSingUp'
                                    onClick={handleLogOut}
                                >Log out</button>
                            </div>
                            {
                                isAuthenticated && <div className="userProfile">
                                    <img src="images/user.jpg" />
                                    <p>{` Hi ${user.name}`}</p>
                                </div>
                            }
                        </div>
                    </div>

                    <div className='menuIcon' onClick={() => setIsOpen(is => !is)}>
                        <AiOutlineMenu />
                    </div>

                </div>
            </div>
        </header>
    )
}

export default Header
