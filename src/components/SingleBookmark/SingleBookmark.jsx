import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useFetch from '../../hook/useFetch';
import { HiArrowLeft } from 'react-icons/hi';
import ReactCountryFlag from 'react-country-flag';
import { SlLocationPin } from 'react-icons/sl';

function SingleBookmark() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { data, isLoading } = useFetch(`http://localhost:5000/bookmarks/${id}`);
    return (
        <div className='singleHotelCotainer'>
            <button className='btn btnBack' onClick={() => navigate(-1)}>
                <HiArrowLeft />
            </button>
            <div className="singleHotelItem">
                <ReactCountryFlag svg countryCode={data.countryCode} className='SinglebookmarkFlag' style={{
                    fontSize: '8rem',
                    margin: '0 .8rem'
                }} />
                <div className="singleBookmarkDetail">
                    <h2>{data.cityName} - {data.country}</h2>
                    <p>
                        <SlLocationPin className='bookmardIconLocation'/>
                        {data.host_location}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SingleBookmark
