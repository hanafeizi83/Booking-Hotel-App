import React from 'react'
import useFetch from '../../hook/useFetch'
import { Link } from 'react-router-dom';
import Loader from '../Loader/Loader';

function HotelsHomeList() {
    const { data, isLoading } = useFetch('http://localhost:5000/hotels');
    if (isLoading) return <Loader />
    return (
        <div>
            <div className="container">
                <div className='hotelsList'>
                    {
                        data.map(hotel => {
                            return <Link key={hotel.id} to={`hotels/${hotel.id}?lat=${hotel.latitude}&lng=${hotel.longitude}`}>
                                <div className="hotelItem">
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
