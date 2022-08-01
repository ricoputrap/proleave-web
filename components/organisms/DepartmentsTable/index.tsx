import { Box } from '@mui/material'
import React from 'react'
import useDepartmentsTable from '../../../hooks/useDepartmentsTable';
import { Department } from '../../../types/departments.types';
import DataTable from '../DataTable';

interface Props {
  departments: Department[]
}

const DepartmentsTable: React.FC<Props> = ({ departments }) => {
  const [headerFields, data] = useDepartmentsTable(departments);

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