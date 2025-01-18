import React from 'react'
import useFetch from '../../hook/useFetch'

function HotelsHomeList() {
    const { data, isLoading } = useFetch('http://localhost:5000/hotels');
    return (
        <div>
            <div className="container">
                <div className='hotelsList'>
                    {
                        data.map(hotel => {
                            return <div key={hotel.id} className="hotelItem">
                                <img src={hotel.picture_url.url} alt={hotel.name} className='hotelImage' />
                                <div className="hotelDesc">
                                    <div className="hotelDetails">
                                        <h2>{hotel.name}</h2>
                                        <p>{hotel.guests} guests | {hotel.accommodates} rooms</p>
                                    </div>
                                    <div className="hotelPrice">
                                        <p>From</p>
                                        <h2>$ {hotel.price}</h2>
                                    </div>
                                </div>
                            </div>
                        })
                    }


                </div>
            </div>
        </div>
    )
}

export default HotelsHomeList
