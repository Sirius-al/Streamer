import streams from '../apiCall/Streams'

import history from '../history';

export const signIn = (userId) => {
    return {
        type: 'SIGN_IN',
        payload: userId
    }
}

export const signOut = () => {
    return {
        type: 'SIGN_OUT'
    }
}

//! ACTIONS FOR STREAMS ==========>>>>>>>>>>>> ( C R U D )

export const getStreams = () => async (dispatch) => {
    const response = await streams.get('/streams');

    dispatch({ type: 'GET_STREAMS', payload: response.data})
}

export const getStream = (id) => async (dispatch) => {
    const response = await streams.get(`/streams/${id}`);

    dispatch({ type: 'GET_STREAM', payload: response.data})
}

export const createStream = (formFieldValues) => async (dispatch, getState) => {
    const { UserId } = getState().auth;
    const response = await streams.post('/streams', { ...formFieldValues, UserId });

    dispatch({ type: 'CREATE_STREAM', payload: response.data })

    history.push('/')
}


export const editStream = (id, formFieldValues) => async (dispatch) => {
    const response = await streams.patch(`/streams/${id}`, formFieldValues);

    dispatch({ type: 'EDIT_STREAM', payload: response.data});

    history.push('/')
}

export const deleteStream = (id) => async (dispatch) => {
    await streams.delete(`/streams/${id}`);

    dispatch({ type: 'DELETE_STREAM', payload: id})

    history.push('/')
}


//? ==> action types
// CREATE_STREAM
// GET_STREAMS
// GET_STREAM
// EDIT_STREAM
// DELETE_STREAM