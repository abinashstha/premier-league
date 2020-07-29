import React from 'react';
import classes from './table.module.css';
import plLogo from '../../../assets/images/logo.png';
const index = (props) => {
  const { leagueTableList } = props
  return (
    <div className={classes.Table}>
      <table>
        <thead>
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
          <tr>
            <td>1</td>
            <td><img src={plLogo} /></td>
            <td className={classes.ClubName}>Manchester City</td>
            <td>38</td>
            <td>30</td>
            <td>8</td>
            <td>100</td>
            <td>30</td>
            <td>70</td>
            <td>100</td>
            <td>100</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default index;
//import { useTable } from 'react-table';
// const columns = [
//     {
//         Header: "Name",
//         columns: [
//             {
//                 Header: "First Name",
//                 accessor: "firstName"
//             },
//             {
//                 Header: "Last Name",
//                 accessor: "lastName"
//             }
//         ]
//     },
//     {
//         Header: "Other Info",
//         columns: [
//             {
//                 Header: "Age",
//                 accessor: "age"
//             }
//         ]
//     }
// ];
// const table = ({ columns, data }) => {
//     const {
//       getTableProps,
//       getTableBodyProps,
//       headerGroups,
//       rows,
//       prepareRow
//     } = useTable({
//       columns,
//       data
//     });

//     return (
//       <table {...getTableProps()}>
//         <thead>
//           {headerGroups.map(headerGroup => (
//             <tr {...headerGroup.getHeaderGroupProps()}>
//               {headerGroup.headers.map(column => (
//                 <th {...column.getHeaderProps()}>{column.render("Header")}</th>
//               ))}
//             </tr>
//           ))}
//         </thead>
//         <tbody {...getTableBodyProps()}>
//           {rows.map((row, i) => {
//             prepareRow(row);
//             return (
//               <tr {...row.getRowProps()}>
//                 {row.cells.map(cell => {
//                   return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
//                 })}
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     );
//   };
//export default table;