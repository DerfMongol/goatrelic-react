import { GET_NBA_FANS, GET_NHL_FANS, GET_PGA_FANS, DELETE_FANS} from './types'

export const getNbaFans = () => async (dispatch, getState, api) => {
    const res = await api.get(`/fans/nba`)
    dispatch(receiveTreeData(res.data, GET_NBA_FANS))
}

export const getNhlFans = () => async (dispatch, getState, api) => {
    const res = await api.get(`/fans/nhl`)
    dispatch(receiveTreeData(res.data, GET_NHL_FANS))
}

export const getPgaFans = () => async (dispatch, getState, api) => {
    const res = await api.get(`/fans/pga`)
    dispatch(receiveTreeData(res.data, GET_PGA_FANS))
}

export const deleteFans = (fanId, sport) => async (dispatch, getState, api) => {
    const res = await api.delete(`/fans`, {data: {id: fanId, sport: sport}})
    dispatch(receiveTreeData(res.data, DELETE_FANS))
}

export const receiveTreeData = (data, type) => ({
    type,
    data
})