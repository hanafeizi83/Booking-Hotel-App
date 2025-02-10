import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Map from '../Map/Map'
import { useDispatch, useSelector } from 'react-redux'
import { getAysncHotels } from '../../features/hotel/hotelSlice'

function HotelLayout() {
    const { hotels } = useSelector(state => state.hotels);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAysncHotels());
    }, [])
    return (
        <div className='container'>
            <div className="mapCotainer">
                <Map mapMarker={hotels} />
                <div className="hotelsContainer">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default HotelLayout
