import React from 'react'
import { BiMapAlt, BiMapPin } from 'react-icons/bi';
import { HiArrowLeft } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'

function AddBookmark() {
    const navigate = useNavigate();
    return (
        <>

            <button className='btn btnBack' onClick={() => navigate(-1)}>
                <HiArrowLeft />
            </button>
            <div className='addBookmarkContainer'>
                <h2 className='addBookmarkTitle'>Add New Location</h2>
                <form>
                    <div className="addNewBookmarkItem">
                        <label htmlFor="cityName">City Name :</label>
                        <div>
                            <BiMapPin className='addBookmarkIcon'/>
                            <input type="text" name='cityName' className='inputAddLocation' placeholder='enter a city name' />
                        </div>
                    </div>

                    <div className="addNewBookmarkItem">
                        <label htmlFor="country">Country :</label>
                        <div>
                            <BiMapAlt className='addBookmarkIcon'/>
                            <input type="text" name='country' className='inputAddLocation' placeholder='enter a country' />
                        </div>
                    </div>

                    <button className='btn btnAddLocation'>Add New Location</button>
                </form>
            </div>
        </>
    )
}

export default AddBookmark
