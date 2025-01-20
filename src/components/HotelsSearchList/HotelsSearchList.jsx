import React from 'react'
import { SlLocationPin } from 'react-icons/sl'
import { Link, useNavigate } from 'react-router-dom'
import { HiArrowLeft } from 'react-icons/hi';
import { useHotels } from '../../context/HotelsProvider';


function HotelsSearchList() {
    const { hotels, isLoading, room, geusts } = useHotels()
    const navigate = useNavigate()

    if (isLoading) return <div>Loading ... </div>
    return (
        <>
            <div className="hotelsSearch">
                <button className='btn btnBack' onClick={() => navigate(-1)}>
                    <HiArrowLeft />
                </button>
                <h2>Hotels List <span>{geusts} Guests and {room} Room</span> </h2>
            </div>
            <div className='hotelsSearchList'>
                {
                    hotels.map(item => {
                        return <div className="hotelSearchItem" key={item.id}>
                            <img src={item.picture_url.url} alt={item.name} />
                            <div className="hotelSearchDetail">
                                <div>
                                    <h3 className='hotelName'>{item.name}</h3>
                                    <p className='hotelLocation'>
                                        <span><SlLocationPin /></span>
                                        {item.host_location}
                                    </p>

                                    <div className="hotelSearchOptions">
                                        <h3>Private room</h3>
                                        <span>{item.accommodates} {item.room_type}</span>
                                        <span>{item.beds} {item.bed_type}</span>
                                    </div>
                                </div>
                                <div className='priceAndBook'>
                                    <h3>${item.price}</h3>
                                    <p>1 nights , {item.guests} Geusts</p>
                                    <Link to={`${item.id}`}>
                                        <button className='btn'>See Booking Options</button>
                                    </Link>
                                </div>

                            </div>
                        </div>
                    })}
            </div>
        </>

    )
}

export default HotelsSearchList
