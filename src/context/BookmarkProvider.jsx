import React, { createContext, useContext, useState } from 'react'
import useFetch from '../hook/useFetch';
import axios from 'axios';


const BookmarkContext = createContext();
function BookmarkProvider({ children }) {
    const { data: bookmarks, isLoading } = useFetch('http://localhost:5000/bookmarks');
    const [currentBookmark, setCurrentBookmark] = useState(null);
    const [isLoadingCurrBookmark, setIsLoadingCurrBookmark] = useState(false);

    async function getBookmark(id) {
        setIsLoadingCurrBookmark(true)
        try {
            const {data}=await axios.get(`http://localhost:5000/bookmarks/${id}`);
            setCurrentBookmark(data);
        } catch (error) {
            toast.error(error?.message);
        }finally{
            setIsLoadingCurrBookmark(false)
        }
    }

    return (
        <BookmarkContext.Provider value={{
            bookmarks,
            isLoading,
            isLoadingCurrBookmark,
            currentBookmark,
            getBookmark
        }}>
            {children}
        </BookmarkContext.Provider>
    )
}

export function useBookmark() {
    return useContext(BookmarkContext)
}

export default BookmarkProvider