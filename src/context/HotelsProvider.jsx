import React, { createContext, useContext, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import useFetch from '../hook/useFetch';
import axios from 'axios';
import toast from 'react-hot-toast';



const HotelsContext = createContext()

function HotelsProvider({ children }) {
    const [searchParams, setSearchParams] = useSearchParams();
    const destination = searchParams.get('destination');
    const room = JSON.parse(searchParams.get('options'))?.Room;
    const geusts = JSON.parse(searchParams.get('options'))?.Guests;
    const [currentHotel, setCurrentHotel] = useState(null);
    const { data: hotels, isLoading } = useFetch('http://localhost:5000/hotels',
        `q=${destination || ''}&accommodates_gte=${room || 1}&guests_gte=${geusts || 1}`);
    const [isCurrLoading, setIsCurrLoading] = useState(false);

    async function getHotel(id) {
        setIsCurrLoading(true)
        try {
            const { data } = await axios.get(`http://localhost:5000/hotels/${id}`);
            setCurrentHotel(data);
        } catch (error) {
            setCurrentHotel(null)
            toast.error(error?.message)
        } finally {
            // setIsCurrLoading(false)
        }
    }



    return (
        <HotelsContext.Provider value={{
            hotels,
            isLoading,
            room,
            geusts,
            currentHotel,
            isCurrLoading,
            getHotel
        }}>
            {children}
        </HotelsContext.Provider>
    )
}


export function useHotels() {
    return useContext(HotelsContext)
}

export default HotelsProvider