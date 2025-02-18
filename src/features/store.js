import { configureStore } from "@reduxjs/toolkit";
import hotelReducer from "./hotel/hotelSlice";
import bookmarkReducer from "./bookmark/bookmarkSlice";
import authReducer from "./auth/authSlice";

const store = configureStore({
    reducer: {
        hotels: hotelReducer,
        bookmarks: bookmarkReducer,
        auth: authReducer
    }
})

export default store