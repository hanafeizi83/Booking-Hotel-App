import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BiMapAlt, BiMapPin } from 'react-icons/bi';
import { HiArrowLeft } from 'react-icons/hi'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useBookmark } from '../../context/BookmarkProvider';
import useUrlLocation from '../../hook/useUrlLocation';

const BASE_LOCATION_URL = 'https://api-bdc.net/data/reverse-geocode-client';


function AddBookmark() {
    const navigate = useNavigate();
    const [lat, lng] = useUrlLocation();
    const [country, setCountry] = useState('');
    const [cityName, setCityName] = useState('');
    const [countryCode, setCountryCode] = useState('');
    const [isLoadingGeoLocation, setIsLoadingGeoLocation] = useState(false)
    const [geoLocationError, setGeoLocationError] = useState(null)
    const { createBookmark } = useBookmark();
    
    useEffect(() => {
        async function FetchData() {
            setIsLoadingGeoLocation(true)
            try {
                const { data } = await axios.get(`${BASE_LOCATION_URL}?latitude=${lat}&longitude=${lng}`)
                if (!data.countryCode) {
                    throw new Error(
                        'this location is not a city . please click somewhere else !!'
                    )
                }
                setCountryCode(data.countryCode);
                setCityName(data.city || data.locality || '');
                setCountry(data.countryCode);

            } catch (error) {
                setGeoLocationError(error?.message);
            } finally {
                setIsLoadingGeoLocation(false)
            }
        }
        FetchData()
    }, [lat, lng])

    const handleSubmitForm = (e) => {
        e.preventDefault();
        if (!cityName || !country) return;
        const newBookmark = {
            cityName,
            country,
            countryCode,
            host_location: cityName + ' ' + country,
            latitude: lat,
            longitude: lng
        }
        createBookmark(newBookmark);
        navigate('/bookmarks')
    }
    return (
        <>
            <button className='btn btnBack' onClick={() => navigate(-1)}>
                <HiArrowLeft />
            </button>
            <div className='addBookmarkContainer'>
                <h2 className='addBookmarkTitle'>Add New Location</h2>
                <form onSubmit={handleSubmitForm}>
                    <div className="addNewBookmarkItem">
                        {/* <label htmlFor="cityName">City Name :</label> */}
                        
                            <BiMapPin className='addBookmarkIcon' />
                            <input
                                type="text"
                                name='cityName'
                                className='inputAddLocation'
                                placeholder='enter a city name'
                                value={cityName}
                                onChange={(e) => setCityName(e.target.value)}
                            />
                        
                    </div>

                    <div className="addNewBookmarkItem">
                        {/* <label htmlFor="country">Country :</label> */}
                        
                            <BiMapAlt className='addBookmarkIcon' />
                            <input
                                type="text"
                                name='country'
                                className='inputAddLocation'
                                placeholder='enter a country'
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                            />
                        
                    </div>

                    <button className='btn btnAddLocation'>Add New Location</button>
                </form>
            </div>
        </>
    )
}

export default AddBookmark
