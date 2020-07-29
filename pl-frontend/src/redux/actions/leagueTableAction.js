import axios from "axios";
import { GET_LEAGUE_TABLE_LIST } from "../reducers/types";

export const GetLeagueTableList = () => (dispatch) => {
  //Just a demo
  dispatch({
    type: GET_LEAGUE_TABLE_LIST,
    payload: [1, 2, 3],
  });
  //   axios
  //     .get(`...`)
  //     .then((resp) => {
  //       dispatch({
  //         type: GET_LEAGUE_TABLE_LIST,
  //         payload: [1, 2, 3],
  //       });
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
};
