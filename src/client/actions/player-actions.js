import { GET_NBA_PLAYER, GET_NHL_PLAYER, GET_PGA_PLAYER } from './types'
import { get }from './functions/data'

export const getNbaPlayer = () => get(`/players/nba`, GET_NBA_PLAYER )
export const getNhlPlayer = () => get(`/players/nhl`, GET_NHL_PLAYER )
export const getPgaPlayer = () => get(`/players/pga`, GET_PGA_PLAYER )
