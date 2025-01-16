import { useEffect, useRef, useState } from 'react'
import { HiCalendar, HiLocationMarker, HiSearch } from 'react-icons/hi'

function Home() {
    const [small, setSmall] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", () =>
                setSmall(window.pageYOffset > 120)
            );
        }
    }, []);

    return (
        <>
            <header className={`header ${small ? 'headerBackground' : ''}`} >
                <div className="container">
                    <div className="headerKeeper">
                        <div className="logo">
                            <img src="images/logo.png" alt="Hotel Logo" />
                            <h2>Serenity Hotel</h2>
                        </div>
                        <nav className='menu'>
                            <ul>
                                <li>Home</li>
                                <li>Hotels</li>
                                <li>Bookmarks</li>
                            </ul>
                        </nav>
                        <div>
                            <button className='btn btnSingIn'>Sign in</button>
                            <button className='btn btnSingUp'>Sign Up</button>
                        </div>
                    </div>
                </div>
            </header>
            <div>
                <div className="container">
                    <div className="headerCotain">
                        <div className="headerHotelDesc">
                            <h2>Find your best stay with Serenity Hotel</h2>
                            <p>Find and book your best stay with Serenity Hotel in world</p>
                        </div>
                    </div>
                    <HeaderSearch />
                </div>
            </div>
        </>
    )
}

export default Home

function HeaderSearch() {
    return (
        <>
            <div className="headerSearchContainer">
                <div className="headerSearchItem">
                    <label htmlFor="destination">Destination :</label>
                    <input type="text" name='destination' id='destination' placeholder='whre do you go ?' />
                    <HiLocationMarker className='icon iconLocation' />
                </div>
                <div className="headerSearchItem">
                    <label>Date :</label>
                    <div id="dropDownDate">
                        2020/12/4
                    </div>
                    <HiCalendar className='icon iconCalender' />
                </div>
                <div className="headerSearchItem">
                    <label>Options :</label>
                    <div id='dropDownOptins'>1 adult &bull; 2 children &bull; 1 room</div>
                </div>
                <button className='btn btnSearchHeader'>
                    <HiSearch className='searchicon' />
                </button>
            </div>
        </>
    )
}
