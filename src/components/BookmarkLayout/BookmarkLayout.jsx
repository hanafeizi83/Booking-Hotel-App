import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Map from '../Map/Map';
import { useDispatch, useSelector } from 'react-redux';
import { getAysncBookmarks } from '../../features/bookmark/bookmarkSlice';

function BookmarkLayout() {
    const { bookmarks } = useSelector(state => state.bookmarks);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAysncBookmarks())
    }, [])
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
