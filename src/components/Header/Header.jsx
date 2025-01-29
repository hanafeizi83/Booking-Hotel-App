import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthProvider';

function Header() {
    const [small, setSmall] = useState(false);
    const { isAuthenticated, logout, user } = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", () =>
                setSmall(window.pageYOffset > 120)
            );
        }
    }, []);
    const handleLogOut = () => {
        logout();
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
                    <nav className='menu'>
                        <ul>
                            <Link to='/'><li>Home</li></Link>
                            <Link to='/hotels'><li>Hotels</li></Link>
                            <Link to='/bookmarks'><li>Bookmarks</li></Link>
                        </ul>
                    </nav>
                    <div className="btnAndProfile">
                        <div>
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
            </div>
        </header>
    )
}

export default Header
