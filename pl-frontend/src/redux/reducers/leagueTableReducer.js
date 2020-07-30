import { GET_LEAGUE_TABLE_LIST } from "./types";
import { GET_LEAGUE_CLUBS_LIST } from './types';

const initialState = {
  leagueTableList: null,
  leagueClubsList: null
};

export function leagueTableReducer(state = initialState, action) {
  switch (action.type) {
    case GET_LEAGUE_TABLE_LIST:
      return {
        ...state,
        leagueTableList: action.payload,
      };
    case GET_LEAGUE_CLUBS_LIST:
      return {
        ...state,
        leagueClubsList: action.payload
      };
    default:
      return state;
  }
}
