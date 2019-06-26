import { GET_NBAFANS_ALLTIME, GET_NHLFANS_ALLTIME, GET_PGAFANS_ALLTIME, POST_FANS_ALLTIME } from './types'

export const getNbaFansAllTime = () => async (dispatch, getState, api) => {
    const res = await api.get(`/fansAllTime/nba`)
    dispatch(receiveTreeData(res.data, GET_NBAFANS_ALLTIME))
}

export const getNhlFansAllTime = () => async (dispatch, getState, api) => {
    const res = await api.get(`/fansAllTime/nhl`)
    dispatch(receiveTreeData(res.data, GET_NHLFANS_ALLTIME))
}

export const getPgaFansAllTime = () => async (dispatch, getState, api) => {
    const res = await api.get(`/fansAllTime/pga`)
    dispatch(receiveTreeData(res.data, GET_PGAFANS_ALLTIME))
}

export const postFansAllTime = (sportList) => async (dispatch, getState, api) => {
    const res = await api.post('/fansAllTime', sportList)
    dispatch({type: POST_FANS_ALLTIME, data: res})
}

export const receiveTreeData = (data, type) => ({
    type,
    data
})