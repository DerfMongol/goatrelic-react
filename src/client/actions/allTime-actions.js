import { GET_NBA_ALLTIME, GET_NHL_ALLTIME, GET_PGA_ALLTIME } from './types'
import { get } from './functions/data'

export const getNbaAllTime = () => get(`/allTime/nba`, GET_NBA_ALLTIME )
export const getNhlAllTime = () => get(`/allTime/nhl`, GET_NHL_ALLTIME )
export const getPgaAllTime = () => get(`/allTime/pga`, GET_PGA_ALLTIME )



