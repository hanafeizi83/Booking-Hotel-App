import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { HiArrowLeft } from 'react-icons/hi';
import ReactCountryFlag from 'react-country-flag';
import { SlLocationPin } from 'react-icons/sl';
import { useDispatch, useSelector } from 'react-redux';
import { getAysncBookmark } from '../../features/bookmark/bookmarkSlice';


function SingleBookmark() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { currentBookmark } = useSelector(state => state.bookmarks);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAysncBookmark({ id }))
    }, [id]);

    if (!currentBookmark) return;
    return (
        <div className='singleHotelCotainer'>
            <button className='btn btnBack' onClick={() => navigate(-1)}>
                <HiArrowLeft />
            </button>
            <div className="singleHotelItem">
                <ReactCountryFlag svg countryCode={currentBookmark.countryCode} className='SinglebookmarkFlag' style={{
                    fontSize: '8rem',
                    margin: '0 .8rem'
                }} />
                <div className="singleBookmarkDetail">
                    <h2>{currentBookmark.cityName} - {currentBookmark.country}</h2>
                    <p>
                        <SlLocationPin className='bookmardIconLocation' />
                        {currentBookmark.host_location}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SingleBookmark
