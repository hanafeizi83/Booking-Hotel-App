import React, { useEffect } from 'react'
import ReactCountryFlag from 'react-country-flag'
import { SlLocationPin } from 'react-icons/sl'
import { Link, useNavigate } from 'react-router-dom';
import { HiArrowLeft } from 'react-icons/hi';
import Loader from '../Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAysncBookmark, getAysncBookmarks } from '../../features/bookmark/bookmarkSlice';

function BookmarksList() {
    const { isLoading, bookmarks, currentBookmark } = useSelector(state => state.bookmarks);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleDelete = (e, id) => {
        e.preventDefault();
        dispatch(deleteAysncBookmark({ id }))
    }
    useEffect(() => {
        dispatch(getAysncBookmarks())
    }, []);

    if (isLoading) return <Loader />
    if (!bookmarks) return <p>there is no bookmarked Location</p>
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
                                    margin: '0 .8rem',
                                    '@media (max-width: 1024px)': {
                                        fontSize: '6rem'
                                    }
                                }} />
                                <div className="bookmarkDetail">
                                    <h2>{item.cityName} - {item.country}</h2>
                                    <p>
                                        <SlLocationPin />
                                        {item.host_location}
                                    </p>
                                    <button className='btn btnRemove' onClick={(e) => handleDelete(e, item.id)}>Remove</button>
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
