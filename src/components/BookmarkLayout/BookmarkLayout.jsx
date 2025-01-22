import React from 'react'
import { Outlet } from 'react-router-dom'
import useFetch from '../../hook/useFetch'
import Map from '../Map/Map';

function BookmarkLayout() {
    const { data: bookmarks, isLoading } = useFetch('http://localhost:5000/bookmarks');
    console.log(bookmarks);
    
    return (
        <div className='container'>
            <div className="mapCotainer">
                <div className="bookmarksContainer">
                    <Outlet />
                </div>
                <Map mapMarker={bookmarks} />
            </div>
        </div>
    )
}

export default BookmarkLayout
