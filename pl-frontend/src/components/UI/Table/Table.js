import React from 'react';
import { useTable } from 'react-table';

const columns = [
    {
      Header: "Name",
      columns: [
        { Header: "First Name",
          accessor: "firstName"},
        {Header: "Last Name",
          accessor: "lastName"}
      ]
    },
    {Header: "Other Info",
      columns: [
        {Header: "Age",
          accessor: "age"}
      ]
    }
  ];
const table = () => {
    return (
        <div>

        </div>
    );
};

export default table;