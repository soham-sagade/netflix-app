import axios from 'axios';

const loginSuccess = (user) => ({
    type: 'login_Success',
    payload: user
})

const loginFail = () => ({
    type: 'login_fail'
})

const logout = () => ({
    type: 'logout'
})
 

export const login = async(user, dispatch) => {
    try {
        const res = await axios.post("/login", user);
        dispatch(loginSuccess(res.data));
    } catch(e) {
        dispatch(loginFail());
    }
}

export const logOut = (dispatch) => {
    dispatch(logout());
}