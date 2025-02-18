import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import Loader from '../Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { getAysncHotels } from '../../features/hotel/hotelSlice';

function HotelsHomeList() {
    const { isLoading, hotels, currentHotel } = useSelector(state => state.hotels);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAysncHotels());
    }, []);

    if (isLoading) return <Loader />
    return (
        <div>
            <div className="container">
                <div className='hotelsList'>
                    {
                        hotels.map(hotel => {
                            return <Link key={hotel.id} to={`hotels/${hotel.id}?lat=${hotel.latitude}&lng=${hotel.longitude}`}>
                                <div className={`hotelItem ${currentHotel?.id === hotel.id ? 'currentHotel' : ''}`}>
                                    <img src={hotel.picture_url.url} alt={hotel.name} className='hotelImage' />
                                    <div className="hotelDesc">
                                        <div className="hotelDetails">
                                            <h2>{hotel.name}</h2>
                                            <p>{hotel.guests} guests | {hotel.accommodates} rooms</p>
                                        </div>
                                        <div className="hotelPrice">
                                            <p>From</p>
                                            <h2>${hotel.price}</h2>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        })
                    }


                </div>
            </div>
        </div>
    )
}

export default HotelsHomeList
