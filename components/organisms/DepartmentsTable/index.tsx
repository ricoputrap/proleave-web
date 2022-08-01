import { TableContainer, Paper, Table, Box } from '@mui/material'
import React from 'react'
import TableBody from '../../molecules/TableBody';
import TableHeader from '../../molecules/TableHeader'

const headerFields: any[] = [
  { label: "Name" },
  { label: "PIC" },
  { label: "Supervisor" },
  { label: "Members" }
];

const data: any[] = [
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
      <TableContainer component={Paper}>
        <Table aria-label="Departments Data Table">
          <TableHeader fields={ headerFields } />
          <TableBody data={ data } />
        </Table>
      </TableContainer>
    </Box>
  )
}

export default DepartmentsTable