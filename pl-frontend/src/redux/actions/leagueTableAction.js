import axios from "axios";
import { GET_LEAGUE_TABLE_LIST } from "../reducers/types";
const baseUrl="http://127.0.0.1:5000/api/";

export const GetLeagueTableList = (year) => async(dispatch) => {
   await axios
        .get(`${baseUrl}results/?year=${year}`)
        .then((resp) => {
            if (resp.status == 200) {
                // let matchPlayed=resp.data.rounds.length;
                // resp.data && resp.data.rounds && resp.data.rounds.map(d=>{

                // })
                dispatch({
                    type: GET_LEAGUE_TABLE_LIST,
                    payload: resp.data,
                });
            }
        })
        .catch((err) => {
            console.log(err.message);
        });
};
