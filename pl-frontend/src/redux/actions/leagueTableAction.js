import axios from "axios";
import { GET_LEAGUE_TABLE_LIST, GET_LEAGUE_CLUBS_LIST, SEARCH_BY_CLUB_NAME, SORT_BY_POINTS } from "../reducers/types";
const baseUrl = "http://127.0.0.1:5000/api/";

export const GetLeagueTableList = (year) => async (dispatch) => {
    let leagueTableList = []
    await axios
        .get(`${baseUrl}clubs/?year=${year}`)
        .then(async (resp) => {
            if (resp.status == 200) {
                await Promise.all(
                    resp.data && resp.data.clubs && resp.data.clubs.map(c => {
                        leagueTableList.push({
                            clubName: c.name,
                            matchPlayed: 0,
                            goalsForward: 0,
                            goalsAgainst: 0,
                            goalsDifference: 0,
                            won: 0,
                            loss: 0,
                            draw: 0,
                            points: 0
                        })
                    })
                )
                dispatch({
                    type: GET_LEAGUE_CLUBS_LIST,
                    leagueTitle: resp.data.name,
                    clubs: resp.data.clubs,
                });
            }
        })
        .catch((err) => {
            console.log(err.message);
        });

    await axios
        .get(`${baseUrl}results/?year=${year}`)
        .then(async (resp) => {
            if (resp.status == 200) {
                let data = resp.data;
                await Promise.all(
                    data && data.rounds && data.rounds.map(async round => {
                        await Promise.all(
                            round && round.matches.map(match => {
                                let selectedClub = null;
                                if (match.score && match.team1) {
                                    selectedClub = leagueTableList.find(f => f.clubName == match.team1);
                                    if (selectedClub) {
                                        selectedClub.goalsForward += match.score.ft[0];
                                        selectedClub.goalsAgainst += match.score.ft[1];
                                        selectedClub.goalsDifference += match.score.ft[0] - match.score.ft[1];
                                        if (match.score.ft[0] > match.score.ft[1]) {
                                            selectedClub.won += 1;
                                            selectedClub.points += 3;
                                        }
                                        else if (match.score.ft[0] < match.score.ft[1]) {
                                            selectedClub.loss += 1;
                                        } else {
                                            selectedClub.draw += 1;
                                            selectedClub.points += 1;
                                        }
                                        selectedClub.matchPlayed += 1;
                                    }
                                }
                                if (match.score && match.team2) {
                                    selectedClub = leagueTableList.find(f => f.clubName == match.team2);
                                    if (selectedClub) {
                                        selectedClub.goalsForward += match.score.ft[1];
                                        selectedClub.goalsAgainst += match.score.ft[0];
                                        selectedClub.goalsDifference += match.score.ft[1] - match.score.ft[0];
                                        if (match.score.ft[1] > match.score.ft[0]) {
                                            selectedClub.won += 1;
                                            selectedClub.points += 3;
                                        }
                                        else if (match.score.ft[1] < match.score.ft[0]) {
                                            selectedClub.loss += 1;
                                        } else {
                                            selectedClub.draw += 1;
                                            selectedClub.points += 1;
                                        }
                                        selectedClub.matchPlayed += 1;
                                    }
                                }
                            })
                        )
                    })
                )
                leagueTableList = leagueTableList.sort(
                    function (a, b) {
                        if (a.points != b.points)
                            return b.points - a.points
                        else
                            return b.goalsDifference - a.goalsDifference
                    }
                );
                dispatch({
                    type: GET_LEAGUE_TABLE_LIST,
                    payload: leagueTableList,
                });
            }
        })
        .catch((err) => {
            console.log(err.message);
        });
};

export const SearchByClubName = (text) => (dispatch) => {
    dispatch({
        type: SEARCH_BY_CLUB_NAME,
        payload: text,
    });
}

export const SortByPoints = (sortBy) => (dispatch) => {
    dispatch({
        type: SORT_BY_POINTS,
        payload: sortBy,
    });

}