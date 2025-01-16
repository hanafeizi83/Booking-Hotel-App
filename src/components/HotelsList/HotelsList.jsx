import React from 'react'
import useFetch from '../../hook/useFetch'

function HotelsList() {
    return (
        <div>
            <div className="container">
                <div className='hotelsList'>
                    <div className="hotelItem">
                        <img src="/images/hote_1.jpg" alt="hotel_1" className='hotelImage' />
                        <div className="hotelDesc">
                            <div className="hotelDetails">
                                <h2>Dummy Title Here</h2>
                                <p>6 guests | 2 bedrooms</p>
                            </div>
                            <div className="hotelPrice">
                                <p>From</p>
                                <h2>$100</h2>
                            </div>
                        </div>
                    </div>
                    <div className="hotelItem">
                        <img src="/images/hote_1.jpg" alt="hotel_1" className='hotelImage' />
                        <div className="hotelDesc">
                            <div className="hotelDetails">
                                <h2>Dummy Title Here</h2>
                                <p>6 guests | 2 bedrooms</p>
                            </div>
                            <div className="hotelPrice">
                                <p>From</p>
                                <h2>$100</h2>
                            </div>
                        </div>
                    </div>
                    <div className="hotelItem">
                        <img src="/images/hote_1.jpg" alt="hotel_1" className='hotelImage' />
                        <div className="hotelDesc">
                            <div className="hotelDetails">
                                <h2>Dummy Title Here</h2>
                                <p>6 guests | 2 bedrooms</p>
                            </div>
                            <div className="hotelPrice">
                                <p>From</p>
                                <h2>$100</h2>
                            </div>
                        </div>
                    </div>
                    <div className="hotelItem">
                        <img src="/images/hote_1.jpg" alt="hotel_1" className='hotelImage' />
                        <div className="hotelDesc">
                            <div className="hotelDetails">
                                <h2>Dummy Title Here</h2>
                                <p>6 guests | 2 bedrooms</p>
                            </div>
                            <div className="hotelPrice">
                                <p>From</p>
                                <h2>$100</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HotelsList
