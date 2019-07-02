import axios from 'axios';

import { FETCH_USER, LOGIN_USER } from './types';

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user')

    dispatch({ type: FETCH_USER, payload: res.data });
};

export const loginUser = () => async dispatch => {
    const res = await axios.post('/api/login', values)

    dispatch({ type: LOGIN_USER, payload: res.data });
};