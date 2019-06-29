import { GET_NBA_CRITIC, GET_NHL_CRITIC, GET_PGA_CRITIC } from './types'
import { get }from './functions/data'

export const getNbaCritic = () => get(`/critics/nba`, GET_NBA_CRITIC )
export const getNhlCritic = () => get(`/critics/nhl`, GET_NHL_CRITIC )
export const getPgaCritic = () => get(`/critics/pga`, GET_PGA_CRITIC )



