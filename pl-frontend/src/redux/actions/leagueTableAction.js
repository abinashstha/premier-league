import axios from "axios";
import { GET_LEAGUE_TABLE_LIST } from "../reducers/types";

export const GetLeagueTableList = () => (dispatch) => {
    const year = "2017-18";
    axios
        .get(`http://127.0.0.1:5000/?year=${year}`)
        .then((resp) => {
            debugger;
            if (resp.status == 200) {
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
