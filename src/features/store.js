import { configureStore } from "@reduxjs/toolkit";
import hotelReducer from "./hotel/hotelSlice";

const store = configureStore({
    reducer: {
        hotels: hotelReducer
    }
})

export default store