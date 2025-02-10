import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    hotels: [],
    isLoading: false,
    error: ''
};

const api = axios.create({
    baseURL: 'http://localhost:5000'
});


export const getAysncHotels = createAsyncThunk('hotels/getAysncHotels', async (payload, { rejectWithValue }) => {
    try {
        const { data } = await api.get(`/hotels?q=${payload?.destination || ''}&accommodates_gte=${payload?.room || 1}&guests_gte=${payload?.guests || 1}`);
        return data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

const hotelSlice = createSlice({
    name: 'hotels',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(getAysncHotels.pending, (state, action) => {
                state.isLoading = true;
                state.hotels = [];
                state.error = '';
            })
            .addCase(getAysncHotels.fulfilled, (state, action) => {
                state.isLoading = false;
                state.hotels = action.payload;
                state.error = '';
            })
            .addCase(getAysncHotels.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
                state.hotels = [];
            })
    }
})


export default hotelSlice.reducer