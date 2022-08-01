import { Box } from '@mui/material'
import React from 'react'
import { TableRowData, TableHeaderField } from '../../../types/data-table.types';
import DataTable from '../DataTable';


const headerFields: TableHeaderField[] = [
  { label: "Name" },
  { label: "PIC" },
  { label: "Supervisor" },
  { label: "Members" }
];

const data: TableRowData[] = [
  {
    id: 1,
    fieldData: [
      { label: "Engineering", url: "" },
      { label: "Alex", url: "" },
      { label: "Rico", url: "" },
      { label: "4", url: "" },
    ]
  },
  {
    id: 2,
    fieldData: [
      { label: "Finance", url: "" },
      { label: "Alex", url: "" },
      { label: "Bambang", url: "" },
      { label: "2", url: "" },
    ]
  },
  {
    id: 3,
    fieldData: [
      { label: "Human Resources", url: "" },
      { label: "Alex", url: "" },
      { label: "Eko", url: "" },
      { label: "2", url: "" },
    ]
  },
]

const DepartmentsTable = () => {
  return (
    <Box sx={{ marginTop: "56px" }}>
      <DataTable
        ariaLabel="Departments Data Table"
        headerFields={ headerFields }
        data={ data }
      />
    </Box>
  )
}

export default DepartmentsTable