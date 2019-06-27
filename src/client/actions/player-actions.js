import { GET_NBA_PLAYER, GET_NHL_PLAYER, GET_PGA_PLAYER } from './types'

export const getNbaPlayer= () => async (dispatch, getState, api) => {
    const res = await api.get(`/players/nba`)
    dispatch(receiveTreeData(res.data, GET_NBA_PLAYER))
}

export const getNhlPlayer= () => async (dispatch, getState, api) => {
    const res = await api.get(`/players/nhl`)
    dispatch(receiveTreeData(res.data, GET_NHL_PLAYER))
}

export const getPgaPlayer= () => async (dispatch, getState, api) => {
    const res = await api.get(`/players/pga`)
    dispatch(receiveTreeData(res.data, GET_PGA_PLAYER))
}

export const receiveTreeData = (data, type) => ({
    type,
    data
})