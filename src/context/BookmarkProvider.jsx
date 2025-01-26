import React, { createContext, useContext, useEffect, useState } from 'react'
import useFetch from '../hook/useFetch';
import axios from 'axios';
import toast from 'react-hot-toast';


const BookmarkContext = createContext();
function BookmarkProvider({ children }) {
    // const { data: bookmarks, isLoading } = useFetch('http://localhost:5000/bookmarks');
    const [currentBookmark, setCurrentBookmark] = useState(null);
    const [isLoadingCurrBookmark, setIsLoadingCurrBookmark] = useState(false);
    const [isLoading, setIsLoading] = useState(false)
    const [bookmarks, setBookmarks] = useState([])
    useEffect(() => {
        async function FetchData() {
            setIsLoading(true);
            try {
                const { data } = await axios.get('http://localhost:5000/bookmarks');
                setBookmarks(data)
            } catch (error) {
                toast.error(error?.message)
            } finally {
                setIsLoading(false)
            }
        }
        FetchData()
    }, [])
    async function getBookmark(id) {
        setIsLoadingCurrBookmark(true)
        try {
            const { data } = await axios.get(`http://localhost:5000/bookmarks/${id}`);
            setCurrentBookmark(data);
        } catch (error) {
            toast.error(error?.message);
        } finally {
            setIsLoadingCurrBookmark(false)
        }
    }
    async function createBookmark(newBookmark) {
        try {
            const { data } = await axios.post('http://localhost:5000/bookmarks', newBookmark);
            setBookmarks(prev => [...prev, data])
        } catch (error) {
            toast.error(error?.message);
        }
    }
    return (
        <BookmarkContext.Provider value={{
            bookmarks,
            isLoading,
            isLoadingCurrBookmark,
            currentBookmark,
            getBookmark,
            createBookmark
        }}>
            {children}
        </BookmarkContext.Provider>
    )
}

export function useBookmark() {
    return useContext(BookmarkContext)
}

export default BookmarkProvider