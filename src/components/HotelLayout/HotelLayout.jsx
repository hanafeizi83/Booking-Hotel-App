import React from 'react'
import { Outlet } from 'react-router-dom'
import Map from '../Map/Map'
import { useHotels } from '../../context/HotelsProvider'

function HotelLayout() {
    const { hotels, isLoading } = useHotels()
    return (
        <div className='container'>
            <div className="mapCotainer">
                <div className="hotelsContainer">
                    <Outlet />
                </div>
                <Map mapMarker={hotels} />
            </div>

        </div>
    )
}

export default HotelLayout
