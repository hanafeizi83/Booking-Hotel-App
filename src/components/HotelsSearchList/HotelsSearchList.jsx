import React from 'react'
import { SlLocationPin } from 'react-icons/sl'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import useFetch from './../../hook/useFetch'
import { HiArrowCircleLeft, HiArrowLeft } from 'react-icons/hi';
function HotelsSearchList() {
    const [searchParams, setSearchParams] = useSearchParams();
    const destination = searchParams.get('destination');
    const room = JSON.parse(searchParams.get('options'))?.Room;
    const geusts = JSON.parse(searchParams.get('options'))?.Guests;
    const navigate = useNavigate()
    const { data, isLoading } = useFetch('http://localhost:5000/hotels',
        `host_location_like=${destination}&accommodates_gte=${room}&guests_gte=${geusts}`);

    console.log(data);


    return (
        <>
            <div className="hotelsSearch">
                <button className='btn' onClick={() => navigate(-1)}>
                    <HiArrowLeft />
                </button>
                <h2>Hotels List <span>{geusts} Guests and {room} Room</span> </h2>
            </div>
            <div className='hotelsSearchList'>
                {
                    data.map(item => {
                        return <div className="hotelSearchItem">
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
