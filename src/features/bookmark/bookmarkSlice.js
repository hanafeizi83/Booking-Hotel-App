import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    isLoading: false,
    bookmarks: [],
    error: '',
    currentBookmark: {}
}

const api = axios.create({
    baseURL: 'http://localhost:5000'
})

export const getAysncBookmarks = createAsyncThunk('bookmarks/getAysncBookmarks', async (payload, { rejectWithValue }) => {
    try {
        const { data } = await api.get('/bookmarks');
        return data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
})
export const getAysncBookmark = createAsyncThunk('bookmarks/getAysncBookmark', async (payload, { rejectWithValue }) => {
    try {
        const { data } = await api.get(`/bookmarks/${payload.id}`);
        return data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
})

export const deleteAysncBookmark = createAsyncThunk('bookmarks/deleteAysncBookmark', async (payload, { rejectWithValue }) => {
    console.log(payload.id);
    try {
        await api.delete(`/bookmarks/${payload.id}`);
        return { id: payload.id }
    } catch (error) {
        return rejectWithValue(error.message)
    }

})

const bookmarkSlice = createSlice({
    name: 'bookmarks',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(getAysncBookmarks.pending, (state, action) => {
                state.isLoading = true;
                state.bookmarks = [];
                state.error = '';
            })
            .addCase(getAysncBookmarks.fulfilled, (state, action) => {
                state.isLoading = false;
                state.bookmarks = action.payload;
                state.error = '';
            })
            .addCase(getAysncBookmarks.rejected, (state, action) => {
                state.isLoading = false;
                state.bookmarks = [];
                state.error = action.payload;
            })
            .addCase(getAysncBookmark.pending, (state, action) => {
                state.isLoading = true;
                state.currentBookmark = {};
                state.error = '';
            })
            .addCase(getAysncBookmark.fulfilled, (state, action) => {
                state.isLoading = false;
                state.currentBookmark = action.payload;
                state.error = '';
            })
            .addCase(getAysncBookmark.rejected, (state, action) => {
                state.isLoading = false;
                state.currentBookmark = {};
                state.error = action.payload;
            })
            .addCase(deleteAysncBookmark.pending, (state, action) => {
                state.isLoading = true;
                // state.bookmarks = [];
                state.error = '';
            })
            .addCase(deleteAysncBookmark.fulfilled, (state, action) => {
                state.isLoading = false;
                state.bookmarks = [...state.bookmarks.filter(item => item.id != action.payload.id)];
            })
            .addCase(deleteAysncBookmark.rejected, (state, action) => {
                state.isLoading = false;
                state.bookmarks = [];
                state.error = action.payload;
            })
    }
})

export default bookmarkSlice.reducer