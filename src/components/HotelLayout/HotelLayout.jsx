import React from 'react'
import { Outlet } from 'react-router-dom'
import Map from '../Map/Map'

function HotelLayout() {
    return (
        <div className='container'>
            <div className="mapCotainer">
                <div className="hotelsContainer">
                    <Outlet />
                </div>
                <Map />
            </div>

        </div>
    )
}

export default HotelLayout
