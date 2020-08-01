import { GET_LEAGUE_TABLE_LIST, GET_LEAGUE_CLUBS_LIST, SEARCH_BY_CLUB_NAME,SORT_BY_POINTS} from "./types";

const initialState = {
  leagueTitle: "",
  originalLeagueTableList: null,
  leagueTableList: null,
  leagueClubsList: null
};

export function leagueTableReducer(state = initialState, action) {
  switch (action.type) {
    case GET_LEAGUE_CLUBS_LIST: {
      return {
        ...state,
        leagueTitle: action.leagueTitle,
        leagueClubsList: action.clubs,
      };
    }

    case GET_LEAGUE_TABLE_LIST:
      return {
        ...state,
        originalLeagueTableList: action.payload,
        leagueTableList: action.payload,
      };

    case SEARCH_BY_CLUB_NAME: {
      return {
        ...state,
        leagueTableList: state.originalLeagueTableList && state.originalLeagueTableList
          .filter(f => f.clubName.toLowerCase().includes(action.payload.toLowerCase())),
      }
    }
    case SORT_BY_POINTS: {
      let sortBy = action.payload;
      return {
        ...state,
        leagueTableList: state.originalLeagueTableList && state.originalLeagueTableList.sort(
          function (a, b) {
            if (sortBy == "desc") {
              if (a.points != b.points)
                return b.points - a.points
              else
                return b.goalsDifference - a.goalsDifference
            } else {
              if (b.points != a.points)
                return a.points - b.points
              else
                return a.goalsDifference - b.goalsDifference
            }
          }
        )
      }
    }

    default:
      return state;
  }
}
