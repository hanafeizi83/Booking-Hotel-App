import React from 'react'
import ReactCountryFlag from 'react-country-flag'
import { SlLocationPin } from 'react-icons/sl'
import { Link } from 'react-router-dom';
import { useBookmark } from '../../context/BookmarkProvider';

function BookmarksList() {
    const { bookmarks, isLoading, currentBookmark } = useBookmark();
    return (
        <div className='bookmarksList'>
            {
                bookmarks.map(item => {
                    return <Link key={item.id} to={`${item.id}?lat=${item.latitude}&lng=${item.longitude}`} >
                        <div className={`bookmarkItem ${currentBookmark.id === item.id ? 'currentBookmark' : ''}`}>
                            <ReactCountryFlag svg countryCode={item.countryCode} className='bookmarkFlag' style={{
                                fontSize: '8rem',
                                margin: '0 .8rem'
                            }} />
                            <div className="bookmarkDetail">
                                <h2>{item.cityName} - {item.country}</h2>
                                <p>
                                    <SlLocationPin />
                                    {item.host_location}
                                </p>
                                <button className='btn btnRemove'>Remove</button>
                            </div>
                        </div>
                    </Link>
                })
            }

        </div>
    )
}

export default BookmarksList
