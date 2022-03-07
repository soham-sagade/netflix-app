import { createContext, useEffect, useReducer } from 'react';
import {useState} from 'react';
const initState = {
    user: null
}

const authReducer = (currAuthState, action) => {
    switch(action.type) {
        case 'login_Success': 
            return {user: action.payload}
        case 'login_fail': 
            return {user: null}
        case 'logout': 
            return {user: null}
        default: 
            return currAuthState;
    }
}

export const AuthContext = createContext(initState);

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(authReducer, initState)

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(state.user));
    }, [state.user])

    return(
    <AuthContext.Provider value={{user: state.user, dispatch}}>
        {children}
    </AuthContext.Provider>
    )
}