import React, { useEffect } from 'react'
import { SlLocationPin } from 'react-icons/sl'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { HiArrowLeft } from 'react-icons/hi';
import { useHotels } from '../../context/HotelsProvider';
import Loader from '../Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { getAysncHotels } from '../../features/hotel/hotelSlice';


function HotelsSearchList() {
    const [searchParams, setSearchParams] = useSearchParams();
    const destination = searchParams.get('destination');
    const room = JSON.parse(searchParams.get('options'))?.Room;
    const guests = JSON.parse(searchParams.get('options'))?.Guests;
    const { isLoading, hotels } = useSelector(state => state.hotels);
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const { currentHotel } = useHotels();

    useEffect(() => {
        dispatch(getAysncHotels({destination  , room , guests}))
    }, [])


    if (isLoading) return <Loader />
    return (
        <>
            <div className="hotelsSearch">
                <button className='btn btnBack' onClick={() => navigate(-1)}>
                    <HiArrowLeft />
                </button>
                <h2>Hotels List <span>{guests} Guests and {room} Room</span> </h2>
            </div>
            <div className='hotelsSearchList'>
                {
                    hotels.map(item => {
                        return <div className={`hotelSearchItem ${currentHotel?.id === item.id ? 'currentHotel' : ''}`} key={item.id}>
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
                                    <Link to={`${item.id}?lat=${item.latitude}&lng=${item.longitude}`}>
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
