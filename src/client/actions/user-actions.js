import { FETCH_CURRENT_USER, POST_SPORT_LIST, FETCH_ALL_USERS } from './types'

export const fetchCurrentUser = () => async (dispatch, getState, api) => {
    const res = await api.get(`/profile`)
    dispatch(receiveTreeData(res.data, FETCH_CURRENT_USER))
}

export const postSportList = (sportList) => async (dispatch, getState, api) => {
    const res = await api.post('/profile', sportList)
    dispatch({type: POST_SPORT_LIST, data: res})
}

export const receiveTreeData = (data, type) => ({
    type,
    data
})

export const fetchAllUsers = () => async (dispatch, getState, api) => {
    const res = await api.get(`/users`)
    dispatch(receiveTreeData(res.data, FETCH_ALL_USERS))
}

