import { GET_NBAFANS_ALLTIME, GET_NHLFANS_ALLTIME, GET_PGAFANS_ALLTIME, POST_FANS_ALLTIME } from './types'
import { get }from './functions/data'

export const getNbaFansAllTime = () => get(`/fansAllTime/nba`, GET_NBAFANS_ALLTIME )
export const getNhlFansAllTime = () => get(`/fansAllTime/nhl`, GET_NHLFANS_ALLTIME )
export const getPgaFansAllTime = () => get(`/fansAllTime/pga`, GET_PGAFANS_ALLTIME )


