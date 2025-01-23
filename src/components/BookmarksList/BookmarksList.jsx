import React from 'react'
import ReactCountryFlag from 'react-country-flag'
import { SlLocationPin } from 'react-icons/sl'
import { Link, useNavigate } from 'react-router-dom';
import { useBookmark } from '../../context/BookmarkProvider';
import { HiArrowLeft } from 'react-icons/hi';

function BookmarksList() {
    const { bookmarks, isLoading, currentBookmark } = useBookmark();
    const navigate = useNavigate();
    return (
        <div className="bookmarksListContainer">
            <button className='btn btnBack' onClick={() => navigate(-1)}>
                <HiArrowLeft />
            </button>
            <h2 className="bookmarksListTitle">Locations List <span>({bookmarks.length})</span></h2>
            <div className='bookmarksList'>
                {
                    bookmarks.map(item => {
                        return <Link key={item.id} to={`${item.id}?lat=${item.latitude}&lng=${item.longitude}`} >
                            <div className={`bookmarkItem ${currentBookmark?.id === item.id ? 'currentBookmark' : ''}`}>
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
        </div>
    )
}

export default BookmarksList
