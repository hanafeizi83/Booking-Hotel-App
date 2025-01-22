import React, { createContext, useContext } from 'react'
import useFetch from '../hook/useFetch';


const BookmarkContext = createContext();
function BookmarkProvider({ children }) {
    const { data: bookmarks, isLoading } = useFetch('http://localhost:5000/bookmarks');
    return (
        <BookmarkContext.Provider value={{ bookmarks, isLoading }}>
            {children}
        </BookmarkContext.Provider>
    )
}

export default BookmarkProvider
export function useBookmark() {
    return useContext(BookmarkContext)
}