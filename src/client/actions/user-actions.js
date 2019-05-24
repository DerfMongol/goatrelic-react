import { FETCH_CURRENT_USER, POST_SPORT_LIST } from './types'

export const fetchCurrentUser = () => async (dispatch, getState, api) => {
    const res = await api.get(`/profile`)
    dispatch(receiveTreeData(res.data, FETCH_CURRENT_USER))
}


export const receiveTreeData = (data, type) => ({
    type,
    data
})

