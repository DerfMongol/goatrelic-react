import { GET_NBA_FANS, GET_NHL_FANS, GET_PGA_FANS, DELETE_FANS} from './types'
import { get, del } from './functions/data'

export const getNbaFans = () => get(`/fans/nba`, GET_NBA_FANS )
export const getNhlFans = () => get(`/fans/nhl`, GET_NHL_FANS )
export const getPgaFans = () => get(`/fans/pga`, GET_PGA_FANS )

export const deleteFans = (fanId, sport) => del(`/fans`, DELETE_FANS, {id: fanId, sport: sport})



