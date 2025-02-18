import { createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast";
const FAKE_USER = {
    name: 'hana',
    email: 'hanafeizi@gmail.com',
    password: '123'
};

const initialState = {
    user: null,
    isAuthenticated: false
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {

            if (FAKE_USER.email == action.payload.email && FAKE_USER.password== action.payload.password) {
                state.user = action.payload;
                state.isAuthenticated = true;
                state.user.name=FAKE_USER.name;
            }
            if (FAKE_USER.email != action.payload.email && FAKE_USER.password != action.payload.password) {
                toast.error('Enter a  vaild email and password')
            }
        },
        logout: (state, action) => {
            console.log(state, action);
            state.user = null;
            state.isAuthenticated = false;
        }
    }
})
export const { login, logout } = authSlice.actions
export default authSlice.reducer