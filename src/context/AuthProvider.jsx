import React, { createContext, useContext, useReducer } from 'react'
import toast from 'react-hot-toast';

const AuthContext = createContext();
const initioalState = {
    user: null,
    isAuthenticated: false
}

function authReducer(state, { type, payload }) {
    switch (type) {
        case 'login': return {
            user: payload,
            isAuthenticated: true
        }
        case 'logout': return {
            user: null,
            isAuthenticated: false
        }
        default:
            throw new Error('Unknown action!!')
    }
}
const FAKE_USER = {
    name: 'hana',
    email: 'hanafeizi@gmail.com',
    password: '123'
};

export default function AuthProvider({ children }) {
    const [{ user, isAuthenticated }, dispatch] = useReducer(authReducer, initioalState);

    function login(email, password) {
        if (FAKE_USER.email === email && FAKE_USER.password === password)
            dispatch({ type: 'login', payload: FAKE_USER })

        if (FAKE_USER.email !== email && FAKE_USER.password !== password)
            toast.error('Enter a  vaild email and password')
    }

    function logout() {
        dispatch({ type: 'logout' })
    }
    return (
        <AuthContext.Provider value={{
            user,
            isAuthenticated,
            login,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthContext);
}