import { useNavigate, useParams } from 'react-router-dom'
import { HiArrowLeft } from 'react-icons/hi';
import { SlLocationPin } from 'react-icons/sl';
import { useEffect, useState } from 'react';
import Loader from '../Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { getAysncHotel } from '../../features/hotel/hotelSlice';

function SingleHotel() {
    const { id } = useParams()
    const { isLoading, currentHotel } = useSelector(state => state.hotels);
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [imageId, setImageId] = useState(1)
    const findedImage = currentHotel?.picture_url?.urls.find(item => item.id === imageId);

    useEffect(() => {
        dispatch(getAysncHotel({ id }));
    }, [id]);

    if (isLoading) return <Loader />
    if (!currentHotel) return;
    return (
        <>
            <div className="singleHotelKeeper">
                <button className='btn btnBack' onClick={() => navigate(-1)}>
                    <HiArrowLeft />
                </button>
                <div className='singleHotel'>
                    <img className='hotelImage' src={findedImage?.image} alt={currentHotel?.name} />
                    <div className='pictureInsideHotel'>
                        {
                            currentHotel?.picture_url?.urls.map(item => {
                                return <img key={item.id} src={item.image} alt="" onClick={() => setImageId(item.id)} />
                            })
                        }
                    </div>
                </div>
                <div className="SingleHotelDetail">
                    <div className="SingleHotelName">
                        <h2>{currentHotel.name}</h2>
                        <p><SlLocationPin /> {currentHotel.host_location}</p>
                    </div>

                </div>
            </div>

        </>

    )
}

export default SingleHotel
