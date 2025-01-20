import React, { createContext, useContext } from 'react'
import { useSearchParams } from 'react-router-dom';
import useFetch from '../hook/useFetch';



const HotelsContext = createContext()

function HotelsProvider({ children }) {
    const [searchParams, setSearchParams] = useSearchParams();
    const destination = searchParams.get('destination');
    const room = JSON.parse(searchParams.get('options'))?.Room;
    const geusts = JSON.parse(searchParams.get('options'))?.Guests;
    const { data: hotels, isLoading } = useFetch('http://localhost:5000/hotels',
        `host_location_like=${destination || ''}&accommodates_gte=${room || 1}&guests_gte=${geusts || 1}`);

    return (
        <HotelsContext.Provider value={{ hotels, isLoading, room, geusts }}>
            {children}
        </HotelsContext.Provider>
    )
}


export function useHotels() {
    return useContext(HotelsContext)
}

export default HotelsProvider