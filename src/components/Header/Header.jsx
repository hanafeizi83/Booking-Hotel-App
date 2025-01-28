import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Header() {
    const [small, setSmall] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", () =>
                setSmall(window.pageYOffset > 120)
            );
        }
    }, []);

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
                    <div>
                        <button className='btn btnSingIn'>Sign in</button>
                        <button className='btn btnSingUp'>Sign Up</button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
