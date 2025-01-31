import React from 'react'
import { Outlet } from 'react-router-dom'
import Map from '../Map/Map'
import { useHotels } from '../../context/HotelsProvider'

function HotelLayout() {
    const { hotels, isLoading } = useHotels()
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
