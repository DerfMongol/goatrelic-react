import { GET_NBAPLAYERS_ALLTIME, GET_NHLPLAYERS_ALLTIME, GET_PGAPLAYERS_ALLTIME } from './types'
import { get }from './functions/data'

export const getNbaPlayersAllTime = () => get(`/playersAllTime/nba`, GET_NBAPLAYERS_ALLTIME )
export const getNhlPlayersAllTime = () => get(`/playersAllTime/nhl`, GET_NHLPLAYERS_ALLTIME )
export const getPgaPlayersAllTime = () => get(`/playersAllTime/pga`, GET_PGAPLAYERS_ALLTIME )
