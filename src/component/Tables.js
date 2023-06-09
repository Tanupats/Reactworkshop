import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 10, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 11, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 12, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 13, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 14, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 15, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 16, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 17, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 18, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 19, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 20, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 21, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 22, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 23, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 24, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 25, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 26, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 27, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 28, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 29, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 30, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 31, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 32, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 33, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 34, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 35, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 36, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 37, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 38, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 39, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 40, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  
];

 function DataTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}

export default DataTable;