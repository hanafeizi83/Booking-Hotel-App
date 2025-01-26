import React, { createContext, useContext, useEffect, useState } from 'react'
import useFetch from '../hook/useFetch';
import axios from 'axios';
import toast from 'react-hot-toast';


const BookmarkContext = createContext();
function BookmarkProvider({ children }) {
    const [currentBookmark, setCurrentBookmark] = useState(null);
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
        setIsLoading(true)
        try {
            const { data } = await axios.get(`http://localhost:5000/bookmarks/${id}`);
            setCurrentBookmark(data);
        } catch (error) {
            toast.error(error?.message);
        } finally {
            setIsLoading(false)
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

    async function deleteBookmark(id) {
        setIsLoading(true)
        try {
            const { data } = await axios.delete(`http://localhost:5000/bookmarks/${id}`)
            setBookmarks(prev => prev.filter(item => item.id != id))
        } catch (error) {
            toast.error(error?.message)
        } finally {
            setIsLoading(false)
        }

    }
    return (
        <BookmarkContext.Provider value={{
            bookmarks,
            isLoading,
            currentBookmark,
            getBookmark,
            createBookmark,
            deleteBookmark
        }}>
            {children}
        </BookmarkContext.Provider>
    )
}

export function useBookmark() {
    return useContext(BookmarkContext)
}

export default BookmarkProvider