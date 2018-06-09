import {
  FETCH_TWITTER_AGREGAT_REQUEST,
  FETCH_TWITTER_REQUEST,
  FETCH_TWITTER_SUCCES,
  FETCH_TWITTER_AGREGAT_SUCCES,
  FETCH_TWITTER_TEAM_REQUEST,
  FETCH_TWITTER_TEAM_SUCCES
} from "../../../actions/index";




export function fetchTwitterTeam(value) {
  return {
    type: FETCH_TWITTER_TEAM_REQUEST,
    payload: value
  }
}

