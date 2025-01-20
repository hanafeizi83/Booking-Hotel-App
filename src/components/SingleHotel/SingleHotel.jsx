import { useNavigate, useParams } from 'react-router-dom'
import useFetch from '../../hook/useFetch'
import { HiArrowLeft } from 'react-icons/hi';
import { SlLocationPin } from 'react-icons/sl';
import { useState } from 'react';

function SingleHotel() {
    const { id } = useParams()
    const { data, isLoading } = useFetch(`http://localhost:5000/hotels/${id}`);
    const navigate = useNavigate()
    const [imageId, setImageId] = useState(1)
    const findedImage = data?.picture_url?.urls.find(item => item.id === imageId);

    return (
        <>
            <button className='btn btnBack' onClick={() => navigate(-1)}>
                <HiArrowLeft />
            </button>
            {
                data && <div className='singleHotel'>
                    <img className='hotelImage' src={data.picture_url.url} alt={data.name} />
                    <div className='pictureInsideHotel'>
                        <img src={data.picture_url.img_1} alt="" />
                        <img src={data.picture_url.img_2} alt="" />
                        <img src={data.picture_url.img_3} alt="" />
                        <img src={data.picture_url.img_4} alt="" />
                    </div>
                </div>
            </div>
            <div className="SingleHotelDetail">
                <div className="SingleHotelName">
                    <h2>{data.name}</h2>
                    <p><SlLocationPin /> {data?.host_location}</p>
                </div>

            </div>
        </>

    )
}

export default SingleHotel
