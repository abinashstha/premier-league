import { GET_LEAGUE_TABLE_LIST } from "./types";

const initialState = {
  leagueTableList: null,
};

export function leagueTableReducer(state = initialState, action) {
  switch (action.type) {
    case GET_LEAGUE_TABLE_LIST:
      return {
        ...state,
        leagueTableList: action.payload,
      };

    default:
      return state;
  }
}
