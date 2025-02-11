import { configureStore } from "@reduxjs/toolkit";
import hotelReducer from "./hotel/hotelSlice";
import bookmarkReducer from "./bookmark/bookmarkSlice";

const store = configureStore({
    reducer: {
        hotels: hotelReducer,
        bookmarks: bookmarkReducer
    }
})

export default store