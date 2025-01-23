import React from 'react'
import { Outlet } from 'react-router-dom'
import Map from '../Map/Map';
import { useBookmark } from '../../context/BookmarkProvider';

function BookmarkLayout() {
    const {bookmarks , isLoading}=useBookmark();
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
