import React, { createContext, useContext, useEffect, useReducer, useState } from 'react'
import useFetch from '../hook/useFetch';
import axios from 'axios';
import toast from 'react-hot-toast';

const BookmarkContext = createContext();

const intialState = {
    bookmarks: [],
    isLoading: 'false',
    currentBookmark: null,
    error: null
}
function bookmarkReducer(state, { type, payload }) {
    switch (type) {
        case 'Loading': return {
            ...state,
            isLoading: true
        }
        case 'bookmarks/loaded': return {
            ...state,
            isLoading: false,
            bookmarks: payload
        }
        case 'bookmark/loaded': return {
            ...state,
            isLoading: false,
            currentBookmark: payload
        }
        case 'bookmark/created': return {
            ...state,
            isLoading: false,
            currentBookmark: payload,
            bookmarks: [...state.bookmarks, payload]
        }
        case 'bookmark/deleted': return {
            ...state,
            isLoading: false,
            bookmarks: state.bookmarks.filter(item => item.id !== payload)
        }
        case 'rejected': return {
            ...state,
            isLoading: false,
            error: payload
        }
        default:
            throw new Error('Unknown action')

    }
}
function BookmarkProvider({ children }) {
    const [{
        bookmarks,
        isLoading,
        currentBookmark
    }, dispatch] = useReducer(bookmarkReducer, intialState);


    useEffect(() => {
        async function FetchData() {
            dispatch({ type: 'Loading' })
            try {
                const { data } = await axios.get('http://localhost:5000/bookmarks');
                dispatch({ type: 'bookmarks/loaded', payload: data })
            } catch (error) {
                toast.error(error?.message)
                dispatch({ type: 'rejected', payload: 'an Error accurred in Loading bookmarks' })
            }
        }
        FetchData()
    }, [])

    async function getBookmark(id) {
        if (id === currentBookmark?.id) return;
        dispatch({ type: 'Loading' })
        try {
            const { data } = await axios.get(`http://localhost:5000/bookmarks/${id}`);
            dispatch({ type: 'bookmark/loaded', payload: data })
        } catch (error) {
            toast.error(error?.message);
            dispatch({ type: 'rejected', payload: 'an Error accurred in get bookmark' })
        }
    }

    async function createBookmark(newBookmark) {
        dispatch({ type: 'Loading' })
        try {
            const { data } = await axios.post('http://localhost:5000/bookmarks', newBookmark);
            dispatch({ type: 'bookmark/created', payload: data })
        } catch (error) {
            toast.error(error?.message);
            dispatch({ type: 'rejected', payload: 'an Error accurred in create bookmark' })
        }
    }

    async function deleteBookmark(id) {
        dispatch({ type: 'Loading' })
        try {
            const { data } = await axios.delete(`http://localhost:5000/bookmarks/${id}`)
            // setBookmarks(prev => prev.filter(item => item.id != id))
            dispatch({ type: 'bookmark/deleted', payload: id })
        } catch (error) {
            toast.error(error?.message)
            dispatch({ type: 'rejected', payload: 'an Error accurred in delete bookmark' })
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