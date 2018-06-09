import {
  FETCH_TWITTER_AGREGAT_REQUEST,
  FETCH_TWITTER_REQUEST,
  FETCH_TWITTER_SUCCES,
  FETCH_TWITTER_AGREGAT_SUCCES,
  FETCH_TWITTER_TEAM_REQUEST,
  FETCH_TWITTER_TEAM_SUCCES
} from "../../../actions/index";


export function fetchTwitter(value) {
  return {
    type: FETCH_TWITTER_REQUEST,
    payload: value
  }
}


export function fetchTwitterSentiment(value) {
  return {
    type: FETCH_TWITTER_AGREGAT_REQUEST,
    payload: value
  }
}


export function fetchTwitterTeam(value) {
  return {
    type: FETCH_TWITTER_TEAM_REQUEST,
    payload: value
  }
}

const initialState = {
  data: {},
  agregat: {}
}


export default function newsReduceur(state = initialState, action) {

  switch (action.type) {
    case FETCH_TWITTER_SUCCES :
      return Object.assign({}, state, {
                    data: action.data
                  });
      break;
    case
      FETCH_TWITTER_AGREGAT_SUCCES:
      return Object.assign({}, state, {
              agregat: action.data
            });
      break;
      case
            FETCH_TWITTER_TEAM_SUCCES:
            return Object.assign({}, state, {
                    team: action.data
                  });
            break;
    default :
      return {}
  }
}
