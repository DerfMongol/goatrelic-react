import { FETCH_CURRENT_USER, POST_SPORT_LIST, FETCH_ALL_USERS } from './types'
import { get, post } from './functions/data'

export const fetchCurrentUser = () => get(`/current_user`, FETCH_CURRENT_USER)
export const fetchAllUsers = () => get(`/users`, FETCH_ALL_USERS)
export const postSportList = (sportList) => post('/profile', POST_SPORT_LIST, sportList)





