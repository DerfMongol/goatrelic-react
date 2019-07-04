import { FETCH_CURRENT_USER, POST_SPORT_LIST, FETCH_ALL_USERS } from './types'
import { get, post } from './functions/data'

const config = {
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    }
}
export const fetchCurrentUser = () => async (dispatch, getState, api) => {
    const res = await api.get('/profile', config)
    dispatch(receiveTreeData(res.data, FETCH_CURRENT_USER))
}

export const fetchAllUsers = () => get(`/users`, FETCH_ALL_USERS)
export const postSportList = (sportList) => post('/profile', POST_SPORT_LIST, sportList)



