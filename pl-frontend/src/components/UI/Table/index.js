import React from 'react';
import classes from './table.module.css';
import plLogo from '../../../assets/images/logo.png';

const index = (props) => {
  const { leagueTableList } = props;
  return (
    <div className={classes.Container}>
      <table className={classes.Table}>
        <thead >
          <tr>
            <th></th>
            <th></th>
            <th className={classes.ClubName}>Clubs</th>
            <th>MP</th>
            <th>W</th>
            <th>L</th>
            <th>D</th>
            <th>GF</th>
            <th>GA</th>
            <th>GD</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {leagueTableList && leagueTableList.map((club, index) => {
            return (
              <tr key={index} className={index<4?classes.topTeams:index>16?classes.bottomTeams:""}>
                <td>{index+1}</td>
                <td><img src={plLogo} /></td>
                <td className={classes.ClubName}>{club.clubName}</td>
                <td>{club.matchPlayed}</td>
                <td>{club.won}</td>
                <td>{club.loss}</td>
                <td>{club.draw}</td>
                <td>{club.goalsForward}</td>
                <td>{club.goalsAgainst}</td>
                <td>{club.goalsDifference}</td>
                <td>{club.points}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}
export default index;